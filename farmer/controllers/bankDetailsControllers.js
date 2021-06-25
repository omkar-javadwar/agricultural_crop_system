const mongoose = require("mongoose");
const Farmer = require("../models/farmerSchema");

exports.getBankDetails = async (req, res) => {
    Farmer.aggregate([{ $match: { _id: mongoose.Types.ObjectId(req.params.id) } },
    { $project: { _id: 0, bank_details: 1 } }])
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err.message);
        });
};

exports.updateBankDetails = async (req, res) => {
    Farmer.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) },
        [{
            $set:
            {
                'bank_details.net_banking.bank_name': req.body.bank_name,
                'bank_details.net_banking.account_number': req.body.account_number,
                'bank_details.net_banking.IFSC_code': req.body.IFSC_code,
                'bank_details.UPI.upi_id': req.body.upi_id
            }
        }])
        .then((data) => {
            res.send('bank details updated');
        })
        .catch((err) => {
            res.send(err.message);
        });
};