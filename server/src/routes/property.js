const express = require('express')
const router = express.Router()
const propertySchema = require('../models/property')
const locationSchema = require('../models/location')

//create property 
router.post('/properties', (req, res) => {
    const property = propertySchema(req.body)
    property.save().then((data) => res.json(data)).catch((err) => res.json({ message: err }))
})

//Get all properties

router.get('/properties', (req, res) => {
    propertySchema.find({}, (err, data) => {
        locationSchema.populate(data, {path: "ubicacion"}, (err, data) => res.json(data))
    })
})


//Get one property by id

router.get('/properties/:id', (req, res) => {
    const { id } = req.params
    propertySchema.findById(id, (err, data) => {
        locationSchema.populate(data, {path: "ubicacion"}, (err, data) => res.json(data))
    })
})


//Update property

router.put('/properties/:id', (req, res) => {
    const { id } = req.params
    const { tipo, ubicacion, area, precio, habitaciones, baños, parqueadero, descripcion, imagenes } = req.body
    propertySchema.updateOne({ _id: id }, { $set: { tipo, ubicacion, area, precio, habitaciones, baños, parqueadero, descripcion, imagenes } }).then((data) => res.json(data)).catch((err) => res.json({ message: err }))
})

//Delete property
router.delete('/properties/:id', (req, res) => {
    const { id } = req.params
    propertySchema.deleteOne({ _id: id }).then((data) => res.json(data)).catch((err) => res.json({ message: err.message }))
})


module.exports = router