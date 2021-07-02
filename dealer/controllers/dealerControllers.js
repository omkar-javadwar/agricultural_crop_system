const Dealer = require('../models/dealerSchema');
const bcrypt = require('bcryptjs');

// get all dealers
viewDealers = async (req, res) => {
    Dealer.find()
        .then((result) => {
            if (result) {
                res.send(result);
            } else {
                res.status(400).send('no dealer data available to display');
            }
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

// get dealer by id
viewDealer = async (req, res) => {
    Dealer.findById(req.params.id)
        .then((result) => {
            if (result) {
                res.send(result);
            } else {
                res.status(400).send('invalid dealer id');
            }
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

// add new dealer
registerDealer = async (req, res) => {

    const newDealer = {
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
        "contact": req.body.contact,
        "address": req.body.address
    }

    const dealer = new Dealer(newDealer);

    //json web token
    const token = await dealer.generateAuthToken();
    res.cookie('jwt', token, {
        expires: new Date(Date.now() + 6000000),
        httpOnly: true
    });

    dealer.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(400).send(err.message);
    });
};

// login using details
loginDealer = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await Dealer.findOne({ email: email });
        const isMatch = await bcrypt.compare(password, user.password);

        //json web token
        const token = await user.generateAuthToken();

        res.cookie('jwt', token, {
            expires: new Date(Date.now() + 6000000),
            httpOnly: true
        });
        
        if (isMatch) {
            res.status(200).send('login successful');
        } else {
            res.status(400).send('invalid password');
        }
    } catch (err) {
        res.status(400).send('invalid user');
    }
}

// update dealer
updateDealer = async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);

    const dealer_details = {
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
        "contact": req.body.contact,
        "address": req.body.address,
    }

    Dealer.findByIdAndUpdate(req.params.id, dealer_details)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

// remove dealer
removeDealer = async (req, res) => {
    Dealer.findByIdAndDelete(req.params.id)
        .then((result) => {
            if (result) {
                res.send(`removed dealer =>
            ${result}`)
            } else {
                res.status(400).send('invalid dealer id')
            }
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

// remove all dealers
removeDealers = async (req, res) => {
    Dealer.deleteMany({})
        .then((result) => {
            res.send(`removed ${result.deletedCount} dealers`);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

module.exports = {
    viewDealers,
    viewDealer,
    registerDealer,
    loginDealer,
    updateDealer,
    removeDealer,
    removeDealers
}