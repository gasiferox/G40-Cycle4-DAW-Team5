const mongoose = require('mongoose')
const locationSchema = require('./location')

const propertySchema = mongoose.Schema({
    tipo: {
        type: String,
        required: true
    },
    ubicacion: {
        type: locationSchema.Types.ObjectID,
        required: false
    },
    area: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    habitaciones: {
        type: Number,
        required: true
    },
    baños: {
        type: Number,
        required: true
    },
    parqueadero: { 
        type: Boolean, 
        required: true
    },
    descripcion: { 
        type: String,
        required: false
    },
    imagenes: { 
        type: string,
        required: false
    }
})

module.exports = mongoose.model('Property', propertySchema)