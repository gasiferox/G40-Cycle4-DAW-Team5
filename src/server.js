const PORT = 7500
const express = require('express')
const app = express()
const colors = require('colors')
const mongoose = require('mongoose')

// DB Connection
const connnectionString = 'mongodb+srv://team5:team5.1234@clusterteam5.dix94.mongodb.net/inmobiliaria?retryWrites=true&w=majority'
mongoose.connect(connnectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log(colors.yellow("mongodb connected"))
}).catch((err) => {
    console.log(color.red("mongodb not connected"))
    console.log(err)
})

// CRUD


// Server launch
app.listen(PORT, () => {
    console.log(colors.rainbow("Server running on port " + PORT))
})