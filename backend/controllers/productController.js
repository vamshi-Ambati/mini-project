const productModel = require("../models/Product")
const multer = require('multer');
const firmModel = require("../models/Firm");
const path = require("path")
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage});

const addProduct = async (req, res) => {
    try {
        const {productName,price,category,bestSeller,description} = req.body;
        const image = req.file? req.file.filename : undefined;

    
    const firm = await firmModel.findById(req.params.id);
    if (!firm) return res.status(404).json({message: 'Firm not found'});

    const product = new productModel({
        productName,
        price,
        category,
        bestSeller,
        description,
        image,
        firm: firm._id
    })
    const savedProduct = await product.save();
    console.log(savedProduct);
    firm.products.push(savedProduct)
    await firm.save();
    return res.status(201).json({msg:"Product added successfully"});

    } catch (error) {
        res.status(500).json({error:"internal server error"});
    }
}

const getProductByFirm= async (req, res) => {
    try {
        const firm = await firmModel.findById(req.params.id).populate('products');
        if (!firm) return res.status(404).json({message: 'Firm not found'});

        const restaurantName = firm.firmName;
        const products = await productModel.find({firm: firm._id})
        res.status(200).json({restaurantName,products});
    } catch (error) {
        res.status(500).json({error:"internal server error"});
    }
}

const deleteProductById = async (req, res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({message: 'Product not found'});

        return res.status(200).json({msg:"Product deleted successfully"});
    } catch (error) {
        res.status(500).json({error:"internal server error"});
    }
}

module.exports = {
    addProduct:[upload.single('image'), addProduct],getProductByFirm, deleteProductById
    
}