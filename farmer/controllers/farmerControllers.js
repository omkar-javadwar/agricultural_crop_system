const Farmer = require("../models/farmerSchema");
const bcrypt = require('bcryptjs');

// GET farmer by ID
viewFarmer = async (req, res) => {
    Farmer.findById(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

// Create new farmer
addFarmer = async (req, res) => {

    const newFarmer = {
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
        "contact": req.body.contact,
        "address": req.body.address,
        "bank_details": req.body.bank_details,
    }

    const farmer = new Farmer(newFarmer);

    //json web token
    const token = await farmer.generateAuthToken();
    res.cookie('jwt', token, {
        expires: new Date(Date.now() + 24 * 60 * 60),
        httpOnly: true
    });
 
    farmer.save().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(400).send(err.message);
    });
};

// farmer login
loginFarmer = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await Farmer.findOne({ email: email });
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            res.status(201).send('login successful');
        } else {
            res.send('invalid password');
        }
    } catch (err) {
        res.status(400).send('invalid user');
    }
}

// Update farmer by ID
updateFarmer = async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);

    const farmer_details = {
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
        "contact": req.body.contact,
        "address": req.body.address,
    }

    Farmer.findByIdAndUpdate(req.params.id, farmer_details)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

// Delete farmer by ID
removeFarmer = async (req, res) => {
    Farmer.findByIdAndDelete(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

module.exports = {
    viewFarmer,
    addFarmer,
    loginFarmer,
    updateFarmer,
    removeFarmer,
}