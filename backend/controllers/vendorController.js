const vendorModel = require('../models/Vendor');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');


dotEnv.config();

// Register a new vendor
const vendorRegister = async (req, res) => {
    const { username, email, password } = req.body;

    // Check if email already exists
    const existingVendor = await vendorModel.findOne({ email });
    if (existingVendor) 
        return res.status(400).json({ message: 'Email already exists' });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new vendor
    const newVendor = await vendorModel.create({
        username,
        email,
        password: hashedPassword
    })
    res.status(201).json(newVendor);
}




// Login a vendor
const vendorLogin = async (req, res) => {
    const {email,password } = req.body;
    // Check if email exists
    const vendor = await vendorModel.findOne({ email });
    if (!vendor) 
        return res.status(404).json({ message: 'Email not found' });

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, vendor.password);
    if (!isMatch) 
        return res.status(400).json({ message: 'Invalid password' });

    // Generate JWT token
    const token = jwt.sign({ vendorId: vendor._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully' ,token});
    console.log(token);
    
    
}
const getAllVendors = async (req, res) => {
   try {
    const vendors = await vendorModel.find().populate("firm");
    res.json(vendors);
   } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error' });
   }
}
const getVendorById = async (req, res) => {
    const vendorId = req.params.id;
    try {
        const vendor = await vendorModel.findById(vendorId).populate("firm"  );
        if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
        return res.json({vendor});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = { vendorRegister,vendorLogin,getAllVendors ,getVendorById  };