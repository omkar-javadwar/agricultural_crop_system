const mongoose = require('mongoose');
const Admin = require('../models/adminSchema');

exports.viewAdmin = async (req, res) => {
    Admin.findById(req.params.id)
        .then((data) => {
            res.send(`Username is ${data.username} and Password is ${data.password}`);
        })
        .catch((err) => {
            //json web token
            res.send(err.message);
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
        res.send(err.message);
    });
};

exports.updateAdmin = async (req, res) => {
    Admin.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) },
        [{
            $set:
            {
                'password': req.body.password,
            }
        }])
        .then(() => {
            res.send(`Updated the password as follows: ${req.body.password}`);
        })
        .catch((err) => {
            res.send(err.message);
        });
};

exports.removeAdmin = async (req, res) => {
    Admin.findByIdAndDelete(req.params.id)
        .then((data) => {
            res.send(`Username ${data.username} has lost the rights!`);
        })
        .catch((err) => {
            res.send(err.message);
        });
};