const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [true, 'username is required']
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 8,
        required: [true, 'password is required']
    }
});

const Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;