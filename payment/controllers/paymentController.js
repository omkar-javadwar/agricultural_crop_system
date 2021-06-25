const Payment = require('../models/paymentSchema');

exports.getPayment = async (req, res) => {
    await Payment.find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getPaymentById = async (req, res) => {
    Payment.findById(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.createPayment = async (req, res) => {
    Payment.create(req.body).then(() => {
        res.send(req.body);
    }).catch((err) => {
        res.send(err);
    });
};

exports.updatePayment = async (req, res) => {
    Payment.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.deletePayments = async (req, res) => {
    Payment.deleteMany({})
        .then((data) => {
            res.send("Database is empty");
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.deletePaymentById = async (req, res) => {
    Payment.findByIdAndDelete(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
};