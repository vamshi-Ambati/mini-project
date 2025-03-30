const express = require('express');
// const firmController = require('../controllers/firmController');
const {verifyToken} = require('../middlewares/verifyToken');
const { addFirm ,deleteFirmById } = require('../controllers/firmController');
const router = express.Router();

router.post('/add-firm', verifyToken ,addFirm);

router.get("/uploads/:imageName", (req, res) => {
    const imageName = req.params.imageName;
    res.headersSent("Content-Type", "image/jpeg");
    res.sendFile(path.join(__dirname, "..", "uploads", imageName));
})

router.delete("/delete-firm/:id", deleteFirmById)

module.exports = router;