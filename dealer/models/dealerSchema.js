const mongoose = require('mongoose')
const validator = require('mongoose-validator')
const bcrypt = require('bcryptjs');

const dealerSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [
            validator({
                validator: 'isEmail',
                message: 'Oops..please enter valid email'
            })
        ],
        required: [true, 'email is required']
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 16,
        required: [true, 'password is required']
    },
    contact: {
        type: String,
        minlength: 10,
        maxlength: 10,
        required: [true, 'Phone number should be set correctly'],
        unique: [true, 'Contact is already exist']
    },
    address: {
        street: {
            type: String,
            trim: true,
            require: [true, 'street is required']
        },
        city: {
            type: String,
            trim: true,
            require: [true, 'city is required']
        },
        state: {
            type: String,
            trim: true,
            require: [true, 'state is required']
        },
        zip:
        {
            type: Number,
            minlength: 6,
            maxlength: 6,
            require: [true, 'zip code is required']
        }
    }
});

// hashing password
dealerSchema.pre('save', async function (next) {
    // only hash the password if it has been modified (or is new)
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const Dealer = mongoose.model('dealer', dealerSchema);
module.exports = Dealer;