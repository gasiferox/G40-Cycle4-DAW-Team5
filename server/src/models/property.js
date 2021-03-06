const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Location = mongoose.model('Location')

//const locationSchema = require('../models/location')

const propertySchema = mongoose.Schema({
    tipo: {
        type: String,
        required: true
    },
    ubicacion: {
        type: Schema.ObjectId,
        ref: 'Location',
        required: true
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
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Propertie', propertySchema)