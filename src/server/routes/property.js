const express = require('express')
const router = express.Router()
const propertySchema = require('../models/property')

// Create property
router.post('/propertys', (req, res) => {
    const property = propertySchema(req.body)
    property.save().then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Get all propertys
router.get('/propertys', (req, res) => {
    propertySchema.find().then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Get one property by id
router.get('/propertys/:id', (req, res) => {
    const { id } = req.params
    propertySchema.findById(id).then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Update property
router.put('/propertys/:id', (req, res) => {
    const { id } = req.params
    const { type, location, area, price, rooms, bathrooms, parking, description, images } = req.body
    propertySchema.updateOne({_id: id}, {$set:{type, location, area, price, rooms, bathrooms, parking, description, images}}).then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Delete property
router.delete('/propertys/:id', (req, res) => {
    const { id } = req.params
    propertySchema.deleteOne({_id: id}).then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

module.exports = router


