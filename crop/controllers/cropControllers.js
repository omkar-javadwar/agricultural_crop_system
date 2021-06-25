const Crop = require('../models/cropSchema');

exports.viewCrops = async (req, res) => {
    await Crop.find()
        .then((data) => {
            res.send(`all crop details =>
             ${data}`);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

exports.viewCropById = async (req, res) => {
    await Crop.findById(req.params.id)
        .then((data) => {
            res.send(`crop details => 
            crop_name: ${data.crop_name}, 
            crop_tag: ${data.crop_tag},
            crop_quantity: ${data.crop_quantity}, 
            crop_price: ${data.crop_price}, 
            crop_description: ${data.crop_description}`);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

exports.addCrop = async (req, res) => {
    var crop = new Crop(req.body);
    await crop.save().then((data) => {
        res.send(`new crop details => 
            crop_name: ${data.crop_name}, 
            crop_tag: ${data.crop_tag},
            crop_quantity: ${data.crop_quantity}, 
            crop_price: ${data.crop_price}, 
            crop_description: ${data.crop_description}`);
    }).catch((err) => {
        res.status(400).send(err.message);
    });
};

exports.updateCrop = async (req, res) => {
    await Crop.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => {
            res.send(`updated crop details => 
            crop_name: ${data.crop_name}, 
            crop_tag: ${data.crop_tag},
            crop_quantity: ${data.crop_quantity}, 
            crop_price: ${data.crop_price}, 
            crop_description: ${data.crop_description}`);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

exports.removeCropById = async (req, res) => {
    await Crop.findByIdAndDelete(req.params.id)
        .then((data) => {
            res.send(`removed crop details => 
            crop_name: ${data.crop_name}, 
            crop_tag: ${data.crop_tag},
            crop_quantity: ${data.crop_quantity}, 
            crop_price: ${data.crop_price}, 
            crop_description: ${data.crop_description}`);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

exports.removeCrops = async (req, res) => {
    await Crop.deleteMany({})
        .then((data) => {
            res.send(`removed all crops =>
            ${data}`);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        })
};