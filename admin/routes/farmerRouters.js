const express = require('express');
const axios = require('axios');
const authentication = require('../../middleware/authentication');

const admin = express.Router();

admin.use(express.json());

/**
 * @swagger
 * /farmer:
 *   get:
 *     responses:
 *       200:
 *         description: Returns all the farmers
 */

//Get farmer
admin.get('/', authentication, (req, res) => {
    axios.get('http://localhost:5000/farmer').then((response) => {
        res.send(response.data)
    }).catch((error) => {
        console.log(error);
    })
})

/**
 * @swagger
 * /farmer/{id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        type: string
 *     responses:
 *       200:
 *         description: Returns the requested farmer
 */

//Get farmer by id
admin.get('/:id', authentication, (req, res) => {
    const id = req.params.id;
    axios.get('http://localhost:5000/farmer/' + id).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        console.log(error);
    })
})

//Post farmer
admin.post('/', authentication, (req, res) => {
    axios.post('http://localhost:5000/farmer/signup', req.body).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
    })
})

//Patch farmer
admin.patch('/:id', authentication, (req, res) => {
    const id = req.params.id;
    axios.patch('http://localhost:5000/farmer/' + id, req.body).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
    })
})


//Delete farmer
admin.delete('/:id', authentication, (req, res) => {
    const id = req.params.id;
    axios.patch('http://localhost:5000/farmer/' + id, req.body).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
    })
})

module.exports = admin;