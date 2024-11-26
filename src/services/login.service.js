const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const loginUser = async (params) => {
    const { email, password } = params
    let user = await userModel.findOne({ email })

    if (!user) {
        return false
    }

    const compare = bcrypt.compare(password, user.password)

    if (!compare) {
        return false
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    return { user, token }
}

const loginServices = {
    loginUser
}

module.exports = loginServices