const mongoose = require('mongoose');
const passwordComplexity = require('joi-password-complexity');
const Joi = require('joi');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// Joi Validation Schema (For Input Validation)
const validateUser = (user) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: passwordComplexity({
            min: 8,
            max: 30,
            lowerCase: 1,
            upperCase: 1,
            numeric: 1,
            symbol: 1
        }).required()
    });
    
    return schema.validate(user);
};

const User = mongoose.model('User', UserSchema);
module.exports = { User, validateUser };