const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
    crop_name: {
        type: String,
        trim: true,
        required: [true, 'name is required']
    },
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'user id required']
    },
    crop_tag: {
        type: String,
        trim: true,
        required: [true, "crop tag is required"]
    },
    crop_quantity: {
        type: Number,
        require: [true, 'quantity of crop is required']
    },
    crop_price: {
        type: Number,
        require: [true, 'crop price must be required']
    },
    crop_description: {
        type: String,
        trim: true,
        minlength: 10,
        maxlength: 50,
        require: false,
    },
}, { timestamps: true });

const Crop = mongoose.model("crop", cropSchema);
module.exports = Crop;