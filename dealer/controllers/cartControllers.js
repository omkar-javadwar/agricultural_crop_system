const Dealer = require('../models/dealerSchema');
const axios = require('axios');
const mongoose = require('mongoose');

// GET all crops for a Dealer
viewCrops = async (req, res) => {
    axios.get(`http://localhost:3001/crop/all`)
        .then((result) => {
            res.send(result.data)
        }).catch((err) => {
            res.status(400).send(err)
        });
};

// GET all crops for a Dealer
viewCrop = async (req, res) => {
    axios.get(`http://localhost:3001/crop?uid=${req.params.uid}`)
        .then((result) => {
            res.send(result.data)
        }).catch((err) => {
            res.status(400).send(err)
        });
};

// Create new crop for a Dealer
addCrop = async (req, res) => {
    try {
        const cropResponse = await axios.post("http://localhost:3001/crop", {
            crop_name: req.body.crop_name,
            user_id: mongoose.Types.ObjectId(req.params.uid),
            crop_tag: req.body.crop_tag,
            crop_quantity: req.body.crop_quantity,
            crop_price: req.body.crop_price
        })
        if (cropResponse.status === 200) {
            Dealer.findById(req.params.uid, (err, user) => {
                user.cart.push(cropResponse.data._id)
                user.save().then(() => {
                    res.send(`Crop added in cart for user: ${user.email} with crop_id: ${cropResponse.data._id}`)
                }).catch((err) => {
                    res.send("failed to add crop_id in user's details")
                })
            })
        } else {
            res.send("Crop not added..")
        }
    } catch (err) {
        res.status(400).send("Error while creating the crop")
        console.log(err.data)
    }
}

// Update single crop for a Dealer
updateCrop = async (req, res) => {
    await axios.put(`http://localhost:3001/crop/${req.params.cid}`, {
        crop_quantity: req.body.crop_quantity
    })
        .then(result => {
            res.send(result.data)
        }).catch((err) => {
            res.status(400).send(err)
        });
};

// Delete single crop for a Dealer
removeCrop = async (req, res) => {
    try {
        const cropResponse = await axios.delete(`http://localhost:3001/crop/${req.params.cid}`)
        if (cropResponse.status === 200) {
            Dealer.findById(req.query.uid, (err, user) => {
                for (var i = 0; i < user.cart.length; i++) {
                    if (user.cart[i] === cropResponse.data._id) {
                        user.cart.splice(i, 1);
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
    viewCrops,
    viewCrop,
    addCrop,
    updateCrop,
    removeCrop
}