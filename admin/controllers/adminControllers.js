const mongoose = require('mongoose');
const Admin = require('../models/adminSchema');
const bcrypt = require('bcryptjs');

viewAdmin = async (req, res) => {
    Admin.findById(req.params.id)
        .then((data) => {
            if(data){
                res.send(`Username is ${data.username} and Password is ${data.password}`);
            }else{
                res.status(400).send('no data available');
            }
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

registerAdmin = async (req, res) => {
    const user = new Admin(req.body);
    const token = await user.generateAuthToken();

    res.cookie('jwt', token, {
        expires: new Date(Date.now() + 3600000),
        httpOnly: true
    });

    let admin = new Admin({
        username: req.body.username,
        password: req.body.password,
    });

    admin.save().then((data) => {
        // Admin.create(admin).then((data) => {
        res.send(`New admin is created with username ${data.username} and password ${data.password}`);
    }).catch((err) => {
        res.status(400).send(err.message);
    });
};

loginAdmin = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await Admin.findOne({ username: username });
        const isMatch = await bcrypt.compare(password, user.password);

        // JWT
        const token = await user.generateAuthToken();

        res.cookie('jwt', token, {
            expires: new Date(Date.now() + 3600000),
            httpOnly: true
        });

        if (isMatch) {
            res.send('login successful');
        } else {
            res.send('invalid password');
        }
    } catch (err) {
        res.status(400).send('invalid user');
    }
};

updateAdmin = async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    Admin.findByIdAndUpdate(req.params.id, req.body.password)
        .then((data) => {
            res.send(`Updated the password as follows: ${data.password}`);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

removeAdmin = async (req, res) => {
    Admin.findByIdAndDelete(req.params.id)
        .then((data) => {
            if(data){
                res.send(`Username ${data.username} has lost the rights!`);
            }else{
                res.status(400).send('no data available');
            }
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

module.exports = {
    viewAdmin,
    registerAdmin,
    loginAdmin,
    updateAdmin,
    removeAdmin
}