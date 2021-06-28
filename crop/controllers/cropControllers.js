const Crop = require('../models/cropSchema');

viewCrops = async (req, res) => {
    Crop.find()
    .then((result) => res.send(result))
    .catch(err => res.status(400).send(err.message) )
}

// GET all crops for a user
// GET single crop for a user
/**
 * A single api can perform multiple operations based on the query params.
 * Also to improve this logic, we can create different util files or modules to handle the separate logic 
 * based on these query params.
 * As this is a straightforward simple condition, I have added them using if else condition here only.
 */

viewCrop = async (req, res) => {

    if (!req.query.cid && req.query.uid) {
        Crop.find({ user_id: req.query.uid }).then(result => {
            if (result) {
                res.send(`all crop details =>
                ${result}`);
            } else {
                res.status(400).send(err.message);
            }
        })
    } else if (req.query.cid && req.query.uid) {
        Crop.find({ _id: req.query.cid, user_id: req.query.uid }).then((result) => {
            if (result) {
                res.send(`crop details =>
                ${result}`);
            } else {
                res.status(400).send(err.message);
            }
        })
    }
}

// Create an crop for a user
addCrop = async (req, res) => {
    const newCrop = {
        "crop_name": req.body.crop_name,
        "user_id": req.body.user_id,
        "crop_tag": req.body.crop_tag,
        "crop_quantity": req.body.crop_quantity,
        "crop_price": req.body.crop_price,
        "crop_description": req.body.crop_description
    }

    // Create new crop instance..
    const crop = new Crop(newCrop)
    crop.save().then((result) => {
        // new crop details =>
        res.send(result);
    }).catch((err) => {
        res.status(400).send(err.message);
    })
}

// Update a single crop
updateCrop = async (req, res) => {
    const crop_details = {
        "crop_quantity": req.body.crop_quantity,
        "crop_price": req.body.crop_price,
        "crop_description": req.body.crop_description
    }

    Crop.findByIdAndUpdate(req.params.cid, crop_details)
        .then((result) => {
            res.send(`updated all crop details =>
                ${result}`);
        }).catch((err) => {
            res.status(400).send(err.message)
        })
};

// Delete a single crop
removeCropById = async (req, res) => {
    Crop.findByIdAndDelete(req.params.cid)
        .then((result) => {
            // removed crop details => 
            res.send(result);
        }).catch((err) => {
            res.status(400).send(err.message);
        });
};

// Delete all crops for a user
removeCrops = async (req, res) => {
    Crop.findOneAndDelete({ user_id: req.query.uid })
        .then((result) => {
            res.send(`removed all crops details =>
                ${result}`)
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

module.exports = {
    viewCrops,
    viewCrop,
    addCrop,
    updateCrop,
    removeCropById,
    removeCrops
}