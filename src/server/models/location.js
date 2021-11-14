const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
    departamento: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    zona: {
        type: String,
        required: true
    },
    vereda: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Location', locationSchema)