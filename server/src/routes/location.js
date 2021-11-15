const express = require('express')
const router = express.Router()
const locationSchema = require('../models/location')

// Create location
router.post('/locations', (req, res) => {
    const location = locationSchema(req.body)
    location.save().then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Get all locations
router.get('/locations', (req, res) => {
    locationSchema.find().then((data) => res.json(data)).catch((err) => res)
})

// Get one location by id
router.get('/locations/:id', (req, res) => {
    const { id } = req.params
    locationSchema.findById(id).then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Update location
router.put('/locations/:id', (req, res) => {
    const { id } = req.params
    const { departamento, ciudad, zona, vereda } = req.body
    locationSchema.updateOne({_id: id}, {$set:{departamento, ciudad, zona, vereda}}).then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Delete location
router.delete('/locations/:id', (req, res) => {
    const { id } = req.params
    locationSchema.deleteOne({_id: id}).then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

module.exports = router