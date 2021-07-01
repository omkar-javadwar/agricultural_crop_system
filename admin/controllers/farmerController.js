const axios = require('axios');

// view all farmers
viewFarmers = (req, res) => {
    axios.get('http://localhost:5000/farmer').then((result) => {
        res.send(result.data)
    }).catch((error) => {
        console.log(error);
    })
}

// view farmer by id
viewFarmer = (req, res) => {
    const id = req.params.id;
    axios.get(`http://localhost:5000/farmer/${id}`).then((result) => {
        res.send(result.data)
    }).catch((error) => {
        console.log(error);
    })
}

// register farmer
registerFarmer = (req, res) => {
    axios.post(`http://localhost:5000/farmer/signup`, req.body).then((result) => {
        res.send(result.data)
    }).catch((error) => {
        console.log(error);
    })
}

// farmer login
loginFarmer = (req, res) => {
    axios.post(`http://localhost:5000/farmer/signin`, req.body).then((result) => {
        res.send(result.data)
    }).catch((error) => {
        console.log(error);
    })
}

// update farmer
updateFarmer = (req, res) => {
    const id = req.params.id;
    axios.put(`http://localhost:5000/farmer/${id}`, req.body).then((result) => {
        res.send(result.data)
    }).catch((error) => {
        console.log(error);
    })
}

// remove farmer by id
removeFarmer = (req, res) => {
    const id = req.params.id;
    axios.delete(`http://localhost:5000/farmer/${id}`).then((result) => {
        res.send(result.data)
    }).catch((error) => {
        console.log(error);
    })
}

// remove all farmers
removeFarmers = (req, res) => {
    axios.delete(`http://localhost:5000/farmer`).then((result) => {
        res.send(result.data)
    }).catch((error) => {
        console.log(error);
    })
}

module.exports = {
    viewFarmers,
    viewFarmer,
    registerFarmer,
    loginFarmer,
    updateFarmer,
    removeFarmer,
    removeFarmers
}