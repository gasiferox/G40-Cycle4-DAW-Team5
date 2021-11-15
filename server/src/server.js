const PORT = process.env.PORT || 7500
const express = require('express')
const app = express()
const colors = require('colors')
const mongoose = require('mongoose')
require('dotenv').config()
// Routes
const locationRoutes = require('./routes/location')
const propertyRoutes = require('./routes/property')
<<<<<<< HEAD:src/server/server.js
const userRoutes = require('./routes/user')
=======
>>>>>>> 37fb6ba77dbcac0e764714e0bdb2a20ab60ee33b:server/src/server.js


// DB Connection
const connnectionString = 'mongodb+srv://team5:team5.1234@clusterteam5.dix94.mongodb.net/inmobiliaria?retryWrites=true&w=majority'
mongoose.connect(connnectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log(colors.bgGreen("mongodb connected"))
}).catch((err) => {
    console.log(color.bgred("mongodb not connected"))
    console.log(err)
})

// CRUD
// Middlewares
app.use(express.json())
app.use(express.static('src'))
app.use('/api', locationRoutes)
app.use('/api', propertyRoutes)
<<<<<<< HEAD:src/server/server.js
app.use('/api', userRoutes)

=======
>>>>>>> 37fb6ba77dbcac0e764714e0bdb2a20ab60ee33b:server/src/server.js

// html invoke
/* const fs = require('fs')
const path = require('path')
const html_content_type = 'text/html'


app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': html_content_type})
    fs.createReadStream('./src/index.html').pipe(res)
}) */

// Server launch
app.listen(PORT, () => {
    console.log(colors.rainbow("Server running on port " + PORT))
})