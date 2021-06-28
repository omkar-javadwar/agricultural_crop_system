const Dealer = require('../models/dealerSchema');
const bcrypt = require('bcryptjs');

viewDealer = async (req, res) => {
    Dealer.findById(req.params.id)
        .then((data) => {
            // res.send(`Dealer details =>
            //     name: ${data.name},
            //     email: ${data.email},
            //     password: ${data.password},
            //     contact: ${data.contact},
            //     address: {
            //         street: ${data.address.street},
            //         city: ${data.address.city},
            //         state: ${data.address.state},
            //         zip: ${data.address.zip}
            //     }`);
            res.send(data);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

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
        expires: new Date(Date.now() + 24 * 60 * 60),
        httpOnly: true
    });

    dealer.save().then((data) => {
        // Dealer.create(req.body).then((data) => {
        // res.send(`New dealer details =>
        //         name: ${data.name},
        //         email: ${data.email},
        //         password: ${data.password},
        //         contact: ${data.contact},
        //         address: {
        //             street: ${data.address.street},
        //             city: ${data.address.city},
        //             state: ${data.address.state},
        //             zip: ${data.address.zip}
        //         }`);
        res.send(data);
    }).catch((err) => {
        res.status(400).send(err.message);
    });
};

loginDealer = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await Dealer.findOne({ email: email });
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            res.status(201).send('login successful');
        } else {
            res.send("invalid password");
        }
    } catch (err) {
        res.status(400).send("invalid user");
    }
}

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
        .then((data) => {
            // res.send(`Updated dealer details =>
            //     name: ${data.name},
            //     email: ${data.email},
            //     password: ${data.password},
            //     contact: ${data.contact},
            //     address: {
            //         street: ${data.address.street},
            //         city: ${data.address.city},
            //         state: ${data.address.state},
            //         zip: ${data.address.zip}
            //     }`);
            res.send(data);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

removeDealer = async (req, res) => {
    Dealer.findByIdAndDelete(req.params.id)
        .then((data) => {
            // res.send(`Removed dealer details =>
            //     name: ${data.name},
            //     email: ${data.email},
            //     password: ${data.password},
            //     contact: ${data.contact},
            //     address: {
            //         street: ${data.address.street},
            //         city: ${data.address.city},
            //         state: ${data.address.state},
            //         zip: ${data.address.zip}
            //     }`);
            res.send(data);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

module.exports = {
    viewDealer,
    registerDealer,
    loginDealer,
    updateDealer,
    removeDealer
}