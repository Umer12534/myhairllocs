const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {
    const {username, password, email} = req.body;

    const user = await userModel.create({
        username, email, password
    })
    
    const token = jwt.sign({
        id: user._id
    },process.env.JWT_SECRET_KEY)
    res.status(201).json({
        message: "user registered successfully",
        user,
        token
    })

}

module.exports = {
    registerUser
}