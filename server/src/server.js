const PORT = process.env.PORT || 7500
const express = require('express')
const app = express()
const cors = require('cors')
/* const corsOptions ={
    origin:'http://localhost:7500', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
} */
const colors = require('colors')
const mongoose = require('mongoose')
require('dotenv').config()
// Routes
const userRoutes = require('./routes/user')
const locationRoutes = require('./routes/location')
const propertyRoutes = require('./routes/property')


// DB Connection
const connnectionString = process.env.MONGODB_URI
mongoose.connect(connnectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log(colors.yellow("mongodb connected"))
}).catch((err) => {
    console.log(colors.red("mongodb not connected"))
    console.log(err)
})


// Middlewares
app.use(express.json())
app.use(express.static('src'))
app.use('/api', userRoutes)
app.use('/api', locationRoutes)
app.use('/api', propertyRoutes)
app.use(cors({
    origin: "*"
}))
/* Allowing connect from proxy */
/* app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
}) */

// html invoke
/* const fs = require('fs')
const path = require('path')
const html_content_type = 'text/html'
app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': html_content_type})
    fs.createReadStream('./src/index.html').pipe(res)
}) */

app.get('/', (req, res) => {
    res.send({ status: 'oki!' })
})

app.get('/users', (req, res) => {
    res.send({ status: 'ok!' })
})

// Server launch
app.listen(PORT, () => {
    console.log(colors.rainbow("Server running on port " + PORT))
    console.log(colors.bgYellow.black(`API endpoint --> http://localhost:${PORT}/api/`))
})