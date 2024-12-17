const { text } = require("express");
const mongoose = require("mongoose");

const propertySchema  = new mongoose.Schema({
    title:{
        type:text,
        require:true

    },
    description:{
        type:text,
        require:true

    },
    location:{
        type:text,
        require:true

    },
    price:{
        type:decimal,
        require:true
    },
    type:{
        type:Option,
        require:true
    }

})

const Properties = mongoose.model('properties', propertySchema);

module.exports = Properties;