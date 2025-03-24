const express = require('express');
const router = express.Router();
const userModel = require('../models/User');

router.post('/create-user', async (req, res) => {
    const { firstName, lastName } = req.body;
    const newUser = await userModel.create({
        firstName,
        lastName
    })
    res.status(201).json(newUser);
});

module.exports = router;