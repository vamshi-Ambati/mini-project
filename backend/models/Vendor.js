const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const vendorModel = mongoose.model('Vendor', vendorSchema);

module.exports = vendorModel;
