const vendorModel = require('../models/Vendor');
const bcrypt = require('bcryptjs');

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
    res.json({ message: 'Logged in successfully' });
    
}

module.exports = { vendorRegister,vendorLogin };