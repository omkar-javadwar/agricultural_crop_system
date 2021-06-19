const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
    crop_name: {
        type: String,
        trim: true,
        required: [true, "name is required"]
    },
    crop_image: {
        data: Buffer,
        contentType: String,
        required: false
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
        require: false
    }
});

const Crop = mongoose.model("crop", cropSchema);
module.exports = Crop;