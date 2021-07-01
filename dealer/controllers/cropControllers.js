const axios = require('axios');

// GET all crops for a Dealer
viewCrops = async (req, res) => {
    axios.get(`http://localhost:3001/crop/all`)
        .then((result) => {
            res.send(result.data)
        }).catch((err) => {
            res.status(400).send(err.message)
        });
};

searchCrop = async (req, res) => {

    if (req.query.crop_name && req.query.crop_tag) {
        axios.get(`http://localhost:3001/crop/search?crop_name=${req.query.crop_name}&crop_tag=${req.query.crop_tag}`)
            .then((result) => {
                res.send(result.data)
            }).catch((err) => {
                res.status(400).send(err.message)
                console.log(err)
            });
    }

    else if (req.query.crop_name && !req.query.crop_tag) {
        axios.get(`http://localhost:3001/crop/search?crop_name=${req.query.crop_name}`)
            .then((result) => {
                res.send(result.data)
            }).catch((err) => {
                res.status(400).send(err.message)
                console.log(err)
            });
    }

    else if (!req.query.crop_name && req.query.crop_tag) {
        axios.get(`http://localhost:3001/crop/search?crop_tag=${req.query.crop_tag}`)
            .then((result) => {
                res.send(result.data)
            }).catch((err) => {
                res.status(400).send(err.message)
                console.log(err)
            });
    }

};

module.exports = {
    viewCrops,
    searchCrop
}