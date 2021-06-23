const Dealer = require('../models/dealerSchema');
const bcrypt = require('bcryptjs');

exports.viewDealerById = async (req, res) => {
    Dealer.findById(req.params.id)
        .then((data) => {
            res.send(`Dealer details =>
                name: ${data.name},
                email: ${data.email},
                password: ${data.password},
                contact: ${data.contact},
                address: {
                    street: ${data.address.street},
                    city: ${data.address.city},
                    state: ${data.address.state},
                    zip: ${data.address.zip}
                }`);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

exports.addDealer = async (req, res) => {
    Dealer.create(req.body).then((data) => {
        res.send(`New dealer details =>
                name: ${data.name},
                email: ${data.email},
                password: ${data.password},
                contact: ${data.contact},
                address: {
                    street: ${data.address.street},
                    city: ${data.address.city},
                    state: ${data.address.state},
                    zip: ${data.address.zip}
                }`);
    }).catch((err) => {
        res.status(400).send(err.message);
    });
};

exports.updateDealer = async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    Dealer.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => {
            res.send(`Updated dealer details =>
                name: ${data.name},
                email: ${data.email},
                password: ${data.password},
                contact: ${data.contact},
                address: {
                    street: ${data.address.street},
                    city: ${data.address.city},
                    state: ${data.address.state},
                    zip: ${data.address.zip}
                }`);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

exports.removeDealer = async (req, res) => {
    Dealer.findByIdAndDelete(req.params.id)
        .then((data) => {
            res.send(`Removed dealer details =>
                name: ${data.name},
                email: ${data.email},
                password: ${data.password},
                contact: ${data.contact},
                address: {
                    street: ${data.address.street},
                    city: ${data.address.city},
                    state: ${data.address.state},
                    zip: ${data.address.zip}
                }`);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};