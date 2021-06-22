const mongoose = require('mongoose');
const Admin = require('../models/adminSchema');
const bcrypt = require('bcryptjs');

exports.viewAdmin = async (req, res) => {
    Admin.findById(req.params.id)
        .then((data) => {
            res.send(`Username is ${data.username} and Password is ${data.password}`);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

exports.addAdmin = async (req, res) => {
    const user = new Admin(req.body);
    const token = await user.generateAuthToken();
    console.log(token);

    //cookies
    res.cookie('jwt', token, {
        expires: new Date(Date.now() + 15000),
        httpOnly: true
    });

    // stroring data into object
    let admin = new Admin({
        username: req.body.username,
        password: req.body.password,
    });

    // passing an object to insert data into database
    Admin.create(admin).then((data) => {
        res.send(`New admin is created with username ${data.username} and password ${data.password}`);
    }).catch((err) => {
        res.status(400).send(err.message);
    });
};

exports.updateAdmin = async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    Admin.findByIdAndUpdate(req.params.id, req.body.password)
        .then((data) => {
            res.send(`Updated the password as follows: ${data.password}`);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

exports.removeAdmin = async (req, res) => {
    Admin.findByIdAndDelete(req.params.id)
        .then((data) => {
            res.send(`Username ${data.username} has lost the rights!`);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};
