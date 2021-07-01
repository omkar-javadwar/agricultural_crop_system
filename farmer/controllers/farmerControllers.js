const Farmer = require("../models/farmerSchema");
const bcrypt = require('bcryptjs');

viewFarmers = async (req, res) => {
    Farmer.find()
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(400).send('no farmer data available to display');
            }
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

// GET farmer by ID
viewFarmer = async (req, res) => {
    Farmer.findById(req.params.id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(400).send('invalid id');
            }
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
        expires: new Date(Date.now() + 6000000),
        httpOnly: true
    });

    farmer.save().then((user) => {

        res.send(user);
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

        //json web token
        const token = await user.generateAuthToken();

        res.cookie('jwt', token, {
            expires: new Date(Date.now() + 6000000),
            httpOnly: true
        });

        if (isMatch) {
            res.status(201).send('login successful');
        } else {
            res.send('invalid password');
        }
    } catch (err) {
        res.status(400).send('invalid user');
        console.log(err)
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
            if (data) {
                res.send(data);
            } else {
                res.status(400).send('invalid id');
            }
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

// remove all farmers
removeFarmers = async (req, res) => {
    Farmer.deleteMany({})
        .then((result) => {
            res.send(`removed ${result.deletedCount} dealers`);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
};

module.exports = {
    viewFarmers,
    viewFarmer,
    addFarmer,
    loginFarmer,
    updateFarmer,
    removeFarmer,
    removeFarmers
}