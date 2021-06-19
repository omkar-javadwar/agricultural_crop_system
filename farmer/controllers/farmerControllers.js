const Farmer = require("../models/farmerSchema");

exports.viewFarmerById = async (req, res) => {
    Farmer.findById(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.addFarmer = async (req, res) => {
    Farmer.create(req.body).then(() => {
        res.send(req.body);
    }).catch((err) => {
        res.send(err);
    });
};

exports.updateFarmer = async (req, res) => {
    Farmer.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.removeFarmer = async (req, res) => {
    Farmer.findByIdAndDelete(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
};