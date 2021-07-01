const axios = require('axios');

// view all dealers
viewDealers = (req, res) => {
    axios.get('http://localhost:4000/dealer').then((result) => {
        res.send(result.data)
    }).catch((error) => {
        console.log(error);
    })
}

// view dealer by id
viewDealer = (req, res) => {
    const id = req.params.id;
    axios.get(`http://localhost:4000/dealer/${id}`).then((result) => {
        res.send(result.data)
    }).catch((error) => {
        console.log(error);
    })
}

// register dealer
registerDealer = (req, res) => {
    axios.post(`http://localhost:4000/dealer/signup`, req.body).then((result) => {
        res.send(result.data)
    }).catch((error) => {
        console.log(error);
    })
}

// dealer login
loginDealer = (req, res) => {
    axios.post(`http://localhost:4000/dealer/signin`, req.body).then((result) => {
        res.send(result.data)
    }).catch((error) => {
        console.log(error);
    })
}

// update dealer
updateDealer = (req, res) => {
    const id = req.params.id;
    axios.put(`http://localhost:4000/dealer/${id}`, req.body).then((result) => {
        res.send(result.data)
    }).catch((error) => {
        console.log(error);
    })
}

// remove dealer by id
removeDealer = (req, res) => {
    const id = req.params.id;
    axios.delete(`http://localhost:4000/dealer/${id}`).then((result) => {
        res.send(result.data)
    }).catch((error) => {
        console.log(error);
    })
}

// remove all dealers
removeDealers = (req, res) => {
    axios.delete(`http://localhost:4000/dealer`).then((result) => {
        res.send(result.data)
    }).catch((error) => {
        console.log(error);
    })
}

module.exports = {
    viewDealers,
    viewDealer,
    registerDealer,
    loginDealer,
    updateDealer,
    removeDealer,
    removeDealers
}