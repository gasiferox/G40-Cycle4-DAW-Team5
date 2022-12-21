const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
    documento: {
        type: String,
        requided: true
    },
    telefono: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    clave: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)