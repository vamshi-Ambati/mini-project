const productModel = require("../models/Product");
const multer = require("multer");
const firmModel = require("../models/Firm");
const path = require("path");

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    // Create a unique filename using the current timestamp and the original file extension
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Create the multer upload instance
const upload = multer({ storage });

// Controller function to add a new product
const addProduct = async (req, res) => {
  try {
    // Extract product details from the request body
    const { productName, price, category, bestSeller, description } = req.body;
    // Determine the filename of the uploaded image, if any
    const image = req.file ? req.file.filename : undefined;

    // Find the firm by the ID provided in the route parameters (assuming the parameter is named 'firmId')
    const firm = await firmModel.findById(req.params.firmId);
    if (!firm) {
      return res.status(404).json({ message: "Firm not found" });
    }

    // Create a new product instance
    const product = new productModel({
      productName,
      price,
      // Assuming 'category' is sent as an array from the frontend
      category: Array.isArray(category) ? category : [category],
      bestSeller,
      description,
      image,
      firm: firm._id, // Associate the product with the found firm
    });

    // Save the new product to the database
    const savedProduct = await product.save();
    console.log("Product saved successfully:", savedProduct);

    // Add the saved product's ID to the firm's list of products
    firm.products.push(savedProduct._id);
    await firm.save();
    console.log("Product added to firm:", firm);

    // Respond with a success status and message
    return res.status(201).json({ msg: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to get all products for a specific firm
const getProductByFirm = async (req, res) => {
  try {
    // Find the firm by ID and populate the 'products' field
    const firm = await firmModel
      .findById(req.params.firmId)
      .populate("products");
    if (!firm) {
      return res.status(404).json({ message: "Firm not found" });
    }

    const restaurantName = firm.firmName;
    // Alternatively, you can directly query the Product model for products belonging to the firm
    // const products = await productModel.find({ firm: firm._id });

    // Respond with the restaurant name and the list of products
    res.status(200).json({ restaurantName, products: firm.products });
  } catch (error) {
    console.error("Error getting products by firm:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to delete a product by its ID
const deleteProductById = async (req, res) => {
  try {
    // Find and delete the product by its ID
    const product = await productModel.findByIdAndDelete(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Optionally, you might want to remove the product reference from the associated Firm's 'products' array

    // Respond with a success status and message
    return res.status(200).json({ msg: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  // Apply the multer middleware to handle single image uploads with the field name 'image'
  addProduct: [upload.single("image"), addProduct],
  getProductByFirm,
  deleteProductById,
};
