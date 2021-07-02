const Dealer = require('../models/dealerSchema');
const axios = require('axios');
const mongoose = require('mongoose');

// GET all items for a Dealer's cart
viewCart = async (req, res) => {
    axios.get(`http://localhost:3001/cart?uid=${req.params.uid}`)
        .then((result) => {
            res.send(result.data)
        }).catch((err) => {
            res.status(400).send(err.message)
        });
};

// Add new item for a Dealer's cart
addCrop = async (req, res) => {
    try {
        const cartResponse = await axios.post("http://localhost:3001/cart", {
            crop_name: req.body.crop_name,
            dealer_id: mongoose.Types.ObjectId(req.params.uid),
            crop_quantity: req.body.crop_quantity,
            crop_price: req.body.crop_price
        })
        if (cartResponse.status === 200) {
            Dealer.findById(req.params.uid, (err, user) => {
                user.cart.push(cartResponse.data._id)
                user.save().then(() => {
                    res.send(`Crop added in cart for user: ${user.email} with crop_id: ${cartResponse.data._id}`)
                }).catch((err) => {
                    res.send("failed to add crop_id into cart")
                })
            })
        } else {
            res.send("Crop not added into cart")
        }
    } catch (err) {
        res.status(400).send("Error while adding crop into cart")
        console.log(err.data)
    }
}

// update cart for a dealer
updateCart = async (req, res) => {
    axios.patch(`http://localhost:3001/cart/${req.params.cid}`, req.body)
        .then((response) => {
            res.send(response.data);
        }).catch((err) => {
            res.status(400).send(err.message);
        })
}

// Delete single crop for a Dealer
removeCrop = async (req, res) => {
    try {
        const cartResponse = await axios.delete(`http://localhost:3001/cart/${req.params.cid}`)
        if (cartResponse.status === 200) {
            Dealer.findById(req.query.uid, (err, user) => {
                for (var i = 0; i < user.cart.length; i++) {
                    if (user.cart[i] === cartResponse.data._id) {
                        user.cart.splice(i, 1);
                    }
                }
                user.save().then(() => {
                    res.send(`Crop deleted for user: ${user.email} with crop_id: ${cartResponse.data._id}`)
                }).catch((err) => {
                    res.send("Crop not added into cart")
                })
            })
        } else {
            res.send("Crop not added into cart")
        }
    } catch (err) {
        res.status(400).send("Error while deleting a crop from cart")
        console.log(err.data)
    }
};

// get bill
viewBill = async (req, res) => {
    axios.get(`http://localhost:3001/cart/bill/${req.params.uid}`)
        .then((result) => {
            res.send(result.data)
        }).catch((err) => {
            res.status(400).send(err.message)
        });
}

payBill = async (req, res) => {
    try {
        const dealerResponse = await Dealer.findById(req.params.uid);
        if (dealerResponse) {

            const dealer_details = {
                name: dealerResponse.name,
                email: dealerResponse.email,
                address: dealerResponse.address,
                price: req.body.price
            }

            axios.post(`http://localhost:7000/payment/${req.params.uid}`, dealer_details)
                .then((result) => {
                    res.send(result.data)
                }).catch((err) => {
                    res.status(400).send(err.message)
                });
        }
        else {
            res.send('invalid dealer_id')
        }
    }
    catch (err) {
        res.status(400).send(err)
    }
}

module.exports = {
    viewCart,
    viewBill,
    addCrop,
    updateCart,
    removeCrop,
    payBill
}