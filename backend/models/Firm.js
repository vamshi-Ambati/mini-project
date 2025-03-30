const mongoose = require('mongoose');

const firmSchema = new mongoose.Schema({
    firmName:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    category:{
        type:[
            {
                type:String,
                enum:["non-veg","veg"]
            }
        ]
    },
    region:{
        type:[
            {
                type:String,
                enum:["north-indian","south-indian","chinese","bakery"]
            }
        ]
    },
    offer:{
        type:String,
    },
    image:{
        type:String,
    },
    vendor :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vendor",
    
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    }]
})

const firmModel = mongoose.model('Firm', firmSchema);

module.exports = firmModel;