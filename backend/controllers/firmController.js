const firmModel = require('../models/Firm');
const vendorModel = require('../models/Vendor');
const multer = require('multer');
const path  = require('path');

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage});

const addFirm = async (req, res) => {
    try {
        const {firmName,area,category,region,offers} = req.body;
        const image = req.file? req.file.filename : undefined;

        const vendor = await vendorModel.findById(req.vendorId);
        console.log(vendor);
        

        if (!vendor) return res.status(404).json({message: 'Vendor not found'});

        const firm = new firmModel({
            firmName,
            area,
            category,
            region,
            offers,
            image,
            vendor: vendor._id
        })
        const savedFirm = await firm.save();
        vendor.firm.push(savedFirm)
        await vendor.save();
                
        return res.status(201).json({msg:"Firm added successfully"});
    } catch (error) {
        console.log(error);
    }
}
const deleteFirmById = async (req, res) => {
    try {
        const firm = await firmModel.findByIdAndDelete(req.params.id);
        if (!firm) return res.status(404).json({message: 'Firm not found'});

        return res.status(200).json({msg:"Firm deleted successfully"});
    } catch (error) {
        res.status(500).json({error:"internal server error"});
    }
}

module.exports = {
    addFirm:[upload.single('image'), addFirm],deleteFirmById
}