const axios = require('axios');

// GET farmer by id
exports.viewFarmer = async (req, res) => {
    axios.get(`http://localhost:5000/farmer/${req.params.uid}`)
        .then((result) => {
            res.send(result.data)
        }).catch((err) => {
            res.status(400).send(err.message)
        });
};