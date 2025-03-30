const vendorModel = require('../models/Vendor')
const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv');
const { log } = require('console');

dotEnv.config()

const secretkey = process.env.SECRET_KEY;


const verifyToken = async(req, res, next) => {
    const token = req.headers.token;

    if (!token) return res.status(401).json({ message: 'Token is required' });

    try {
        const decoded = jwt.verify(token, secretkey);
        const vendor = await vendorModel.findById(decoded.vendorId);

        if (!vendor) return res.status(404).json({ message: 'Vendor not found' });

        req.vendorId = vendor._id;

    next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({ message: 'Token is invalid' });
    }
}

module.exports = {
    verifyToken
}