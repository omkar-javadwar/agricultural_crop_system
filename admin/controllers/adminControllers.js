const mongoose = require('mongoose');
const Admin = require('../models/adminSchema');

exports.viewAdmin = async (req, res) => {
    Admin.findById(req.params.id)
        .then((data) => {
            res.send(`Username is ${data.username} and Password is ${data.password}.`);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.addAdmin = async (req, res) => {
    Admin.create(req.body).then((data) => {
        res.send(`New admin is created as follows: ${data}`);
    }).catch((err) => {
        res.send(err);
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
            console.log(err);
        });
};

exports.removeAdmin = async (req, res) => {
    Admin.findByIdAndDelete(req.params.id)
        .then((data) => {
            res.send(`${data} has lost the rights!`);
        })
        .catch((err) => {
            console.log(err);
        });
};