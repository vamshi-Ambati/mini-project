const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: [
      {
        type: String,
        enum: ["veg", "non-veg"],
      },
    ],
  },
  image: {
    type: String,
  },
  bestSeller: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  firm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Firm",
  },
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;