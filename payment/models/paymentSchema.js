const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Email address is required']
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
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String,
            uppercase: true
        },
        zip:
        {
            type: Number,
            length: 6
        }
    },
    crop_details: {
        crop_name: {
            type: String,
            trim: true,
            required: [true, "Please enter crop name"]
        },
        crop_tag: {
            type: String,
            required: [true, "Please enter crop tag"]
        },
        crop_quantity: {
            type: Number,
            require: [true, "Please enter quantity of crop"]
        },
        crop_price: {
            type: Number,
            require: [true, "Please enter price of crop"]
        }
    },
    delivery_details: {
        delivery_date: {
            type: String,
            require: [true, "Please Enter delivery date"]
        },
        delivery_timeslot: {
            type: String,
            require: false
        }
    }
});

const Payment = new mongoose.model("payment", paymentSchema);
module.exports = Payment;