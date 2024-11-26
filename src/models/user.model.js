const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    lastname: {
        type: String,
    },
    firstname: {
        type: String,
    },
})

module.exports = model('User', userSchema);