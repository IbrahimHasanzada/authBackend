const joi = require('joi')

const login = joi.object({
    password: joi.string()
        .min(6)
        .max(100)
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
    email: joi.string().email().required(),
})

const loginValidations = {
    login
}

module.exports = loginValidations;