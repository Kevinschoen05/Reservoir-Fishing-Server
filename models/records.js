const mongoose = require('mongoose'); 

const recordSchema = mongoose.Schema({
    species: String, 
    reservoir: String, 
    angler: String, 
    weight: Number,
    date: {
        type: Date, 
        default: Date.now()
    },
    image: {
        type: String,
        require: false 
    },
    comment: String,
    latitude:{
        type: String,
        require: false
    },
    longitude:{
        type: String,
        require: false
    },


})
module.exports = mongoose.model("Record", recordSchema)