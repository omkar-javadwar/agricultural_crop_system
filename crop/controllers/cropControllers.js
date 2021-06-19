const Crop = require('../models/cropSchema');

exports.viewCrops = async (req, res) => {
    await Crop.find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.viewCropById = async (req, res) => {
    Crop.findById(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.addCrop = async (req, res) => {
    var crop = new Crop(req.body);
    crop.save(req.body).then(() => {
        res.send(crop);
    }).catch((err) => {
        res.send(err);
    });
};

exports.updateCrop = async (req, res) => {
    Crop.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.removeCropById = async (req, res) => {
    Crop.findByIdAndDelete(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.removeCrops = async (req, res) => {
    Crop.deleteMany({})
        .then((items) => {
            res.send("All crops are removed.");
        })
        .catch((err) => {
            console.log(err);
        })
};