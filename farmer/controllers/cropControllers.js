const Farmer = require("../models/farmerSchema");
const axios = require("axios");
const mongoose = require("mongoose");

// GET all crops for a farmer
viewCrop = async (req, res) => {
    axios.get(`http://localhost:3001/crop?uid=${req.params.uid}`)
        .then((result) => {
            res.send(result.data)
        }).catch((err) => {
            res.status(400).send(err)
        });
};

// Create new crop for a farmer
addCrop = async (req, res) => {
    try {
        const cropResponse = await axios.post("http://localhost:3001/crop", {
            crop_name: req.body.crop_name,
            farmer_id: mongoose.Types.ObjectId(req.params.uid),
            crop_tag: req.body.crop_tag,
            crop_quantity: req.body.crop_quantity,
            crop_price: req.body.crop_price,
            crop_description: req.body.crop_description
        })
        if (cropResponse.status === 200) {
            Farmer.findById(req.params.uid, (err, user) => {
                user.crops.push(cropResponse.data._id)
                user.save().then(() => {
                    res.send(`Crop created for user: ${user.email} with crop_id: ${cropResponse.data._id}`)
                }).catch((err) => {
                    res.send(`failed to add crop_id in user's details ${err.message}`)
                })
            })
        } else {
            res.send("Crop not created..")
        }
    } catch (err) {
        res.status(400).send("Error while creating the crop")
        console.log(err.data)
    }
}

// Update single crop for a farmer
updateCrop = async (req, res) => {
    await axios.put(`http://localhost:3001/crop/${req.params.cid}`, {
        crop_quantity: req.body.crop_quantity,
        crop_price: req.body.crop_price,
        crop_description: req.body.crop_description
    })
        .then(result => {
            res.send(result.data)
        }).catch((err) => {
            res.status(400).send(err.message)
        });
};

// Delete single crop for a farmer
removeCrop = async (req, res) => {
    try {
        const cropResponse = await axios.delete(`http://localhost:3001/crop/${req.params.cid}`)
        if (cropResponse.status === 200) {
            Farmer.findById(req.query.uid, (err, user) => {
                for (var i = 0; i < user.crops.length; i++) {
                    if (user.crops[i] === cropResponse.data._id) {
                        user.crops.splice(i, 1);
                    }
                }
                user.save().then(() => {
                    res.send(`Crop deleted for user: ${user.email} with crop_id: ${cropResponse.data._id}`)
                }).catch((err) => {
                    res.send("failed to delete crop_id in user's details")
                })
            })
        } else {
            res.send("Crop not deleted..")
        }
    } catch (err) {
        res.status(400).send("Error while deleting the crop")
        console.log(err.data)
    }
};

module.exports = {
    viewCrop,
    addCrop,
    updateCrop,
    removeCrop
}