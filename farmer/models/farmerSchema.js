const mongoose = require('mongoose')
const validator = require('mongoose-validator')

const farmerSchema = mongoose.Schema({
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
        required: true
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
    },
    bank_details: {
        net_banking:
        {
            bank_name: {
                type: String,
                require: [true, 'bank name is required']
            },
            account_number: {
                type: String,
                unique: true,
                require: [true, 'account number is required']
            },
            IFSC_code: {
                type: String,
                require: [true, 'IFSC code must be required']
            }
        },
        UPI: {
            upi_id: {
                type: String
            }
        }
    }
});

const Farmer = mongoose.model('farmer', farmerSchema);
module.exports = Farmer;