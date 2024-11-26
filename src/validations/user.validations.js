const joi = require('joi')

const register = joi.object({
    username: joi.string().min(3).max(30).alphanum().required(),
    password: joi.string()
        .min(6)
        .max(100)
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
    email: joi.string().email().required(),
    gender: joi.string().allow("male", "female").optional(),
    firstname: joi.string().trim().min(3).max(30).optional(),
    lastname: joi.string().trim().min(3).max(30).optional(),
})

const userValidations = {
    register
}

module.exports = userValidations;