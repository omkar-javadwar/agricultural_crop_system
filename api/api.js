const express = require('express');
const axios = require('axios');
const api = express();
const port = process.env.PORT || 7000;

api.use(express.json());

//api home
api.get('/home', (req, res) => {
    res.send('welcome to api gateway')
})

// Get farmer by id
api.get('/farmer/data/:id', (req, res) => {
    const id = req.params.id;
    axios.get('http://localhost:5000/farmer/' + id).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        console.log(error);
    })
})

// Get dealer by id
api.get('/dealer/data/:id', (req, res) => {
    const id = req.params.id;
    axios.get('http://localhost:4000/dealer/' + id).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        console.log(error);
    })
})

// Post dealer
api.post('/dealer/add', (req, res) => {
    axios.post('http://localhost:4000/dealer/signup', req.body).then((response) => {
        res.send(response.data);
    })
})

// Post farmer
api.post('/farmer/add', (req, res) => {
    axios.post('http://localhost:5000/farmer/signup', req.body).then((response) => {
        res.send(response.data);
    })
})

// Put farmer
api.put('/farmer/update/:id', (req, res) => {
    const id = req.params.id;
    axios.put('http://localhost:5000/farmer/' + id, req.body).then((response) => {
        res.send(response.data);
    })
})

// Put dealer
api.put('/dealer/update/:id', (req, res) => {
    const id = req.params.id;
    axios.put('http://localhost:4000/dealer/' + id, req.body).then((response) => {
        res.send(response.data);
    })
})

// Delete farmer
api.delete('/farmer/delete/:id', (req, res) => {
    const id = req.params.id;
    axios.delete('http://localhost:5000/farmer/' + id, req.body).then((response) => {
        res.send(response.data);
    })
})

// Delete dealer
api.delete('/dealer/delete/:id', (req, res) => {
    const id = req.params.id;
    axios.delete('http://localhost:4000/dealer/' + id, req.body).then((response) => {
        res.send(response.data);
    })
})

// Get crop
api.get('/crop', (req, res) => {
    axios.get('http://localhost:3001/crop').then((response) => {
        res.send(response.data)
    }).catch((error) => {
        console.log(error);
    })
})

// Post crop
api.post('/crop/add', (req, res) => {
    axios.post('http://localhost:3001/crop', req.body).then((response) => {
        res.send(response.data);
    })
})

// Put crop
api.put('/crop/add/:id', (req, res) => {
    const id = req.params.id;
    axios.put('http://localhost:3001/crop', req.body).then((response) => {
        res.send(response.data);
    })
})

// delete crop
api.delete('/crop/add/:id', (req, res) => {
    const id = req.params.id;
    axios.dealer('http://localhost:3001/crop', req.body).then((response) => {
        res.send(response.data);
    })
})

// Get crop by farmer
api.get('/farmer/cropdata/:uid', (req, res) => {
    const id = req.params.uid;
    axios.get(`http://localhost:5000/farmer/${uid}/crop`).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        console.log(error);
    })
})

// Add crop by farmer
api.post('/farmer/cropdata/:uid', (req, res) => {
    const id = req.params.uid;
    axios.post(`http://localhost:5000/farmer/${uid}/crop`, req.body).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        console.log(error);
    })
})

api.listen(port, () => {
    console.log(`listning to port ${port}`);
});