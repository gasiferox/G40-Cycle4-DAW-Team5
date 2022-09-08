const express = require('express')
const router = express.Router()
const userSchema = require('../models/user')

// Create user
router.post('/users', (req, res) => {
    const user = userSchema(req.body)
    user.save().then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Get all users
router.get('/users', (req, res) => {
    userSchema.find().then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Get a user
router.get('/users/:id', (req, res) => {
    const {id} = req.params
    userSchema.findById(id).then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Update a user
router.put('/users/:id', (req, res) => {
    const {id} = req.params
    const {nombres, apellidos, documento, telefono, email, clave} = req.body
    userSchema.updateOne({_id: id}, {$set: {nombres, apellidos, documento, telefono, email, clave}}).then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Delete a user
router.delete('/users/:id', (req, res) => {
    const {id} = req.params
    userSchema.deleteOne({_id: id}).then((data) => res.json(data)).catch((err) => res.json({message: err}))
})


module.exports = router