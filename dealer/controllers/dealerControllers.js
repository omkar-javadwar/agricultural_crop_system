const Dealer = require('../models/dealerSchema');

exports.viewDealerById = async (req, res) => {
    Dealer.findById(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.addDealer = async (req, res) => {
    Dealer.create(req.body).then(() => {
        res.send(req.body);
    }).catch((err) => {
        res.send(err);
    });
};

exports.updateDealer = async (req, res) => {
    Dealer.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.removeDealer = async (req, res) => {
    Dealer.findByIdAndDelete(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
};