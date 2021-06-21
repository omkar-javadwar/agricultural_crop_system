const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
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

//generating token
adminSchema.methods.generateAuthToken = async function () {
    try {
        // const token = jwt.sign({ email: this.email }, process.env.SECRET_KEY);
        const token = jwt.sign({ username: this.username }, "qwertyuiop1236547890");
        // this.tokens = this.tokens.concat({token});
        // await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}

// hashing password
adminSchema.pre('save', async function (next) {
    // only hash the password if it has been modified (or is new)
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;