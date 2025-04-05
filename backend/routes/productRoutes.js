const express = require('express');
const {addProduct , getProductByFirm,deleteProductById} = require('../controllers/productController')

const router = express.Router();

router.post('/add-product/:firmId',addProduct)
router.get("/:id/products", getProductByFirm)
router.get("/uploads/:imageName", (req, res) => {
    const imageName = req.params.imageName;
    res.headersSent("Content-Type", "image/jpeg");
    res.sendFile(path.join(__dirname, "..", "uploads", imageName));
})

router.delete("/delete-product/:id", deleteProductById)
module.exports = router;