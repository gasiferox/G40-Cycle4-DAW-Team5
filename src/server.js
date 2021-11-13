const PORT = process.env.PORT || 7500
const express = require('express')
const app = express()
const colors = require('colors')
const mongoose = require('mongoose')
require('dotenv').config()
const userRoutes = require('./routes/user')


// DB Connection
const connnectionString = process.env.MONGODB_URI
mongoose.connect(connnectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log(colors.yellow("mongodb connected"))
}).catch((err) => {
    console.log(colors.red("mongodb not connected"))
    console.log(err)
})

// Routes


// Middlewares
app.use('/api', userRoutes)


// index.html invoke


// Schema Imports


// CRUD


// Server launch
app.listen(PORT, () => {
    console.log(colors.rainbow("Server running on port " + PORT))
})