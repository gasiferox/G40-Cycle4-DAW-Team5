const PORT = 7500
const express = require('express')
const app = express()
const colors = require('colors')

// DB Connection


// CRUD


// Server launch
app.listen(PORT, () => {
    console.log(colors.rainbow("Server running on port " + PORT))
})