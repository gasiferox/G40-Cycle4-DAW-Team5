const mongoose = require('mongoose')

const propertySchema = mongoose.Schema({

    type: {
        type: String,
        required: true
    },

    location:{
        type: String,
        required: true
    },
    
    area:{
        type: Number,
        required: true
    },

    price:{
        type: Number,
        required: true
    },

    rooms:{
        type: Number,
        required: true
    },
    bathrooms:{
        type: Number,
        required: true
    },
    parking:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    images:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Property', propertySchema)