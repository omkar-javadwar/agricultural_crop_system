const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    crop_name: {
        type: String,
        trim: true,
        required: [true, 'name is required']
    },
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'user id required']
    },
    crop_quantity: {
        type: Number,
        require: [true, 'quantity of crop is required']
    },
    crop_price: {
        type: Number,
        require: [true, 'crop price must be required']
    }
}, { timestamps: true });

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;