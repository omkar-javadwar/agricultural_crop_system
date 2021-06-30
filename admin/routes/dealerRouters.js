const express = require('express');
const axios = require('axios');
const authentication = require('../../middleware/authentication');

const admin = express.Router();

admin.use(express.json());

/**
 * @swagger
 * /dealer:
 *   get:
 *     responses:
 *       200:
 *         description: Returns all the dealers
 */

//Get dealer
admin.get('/', authentication, (req, res) => {
    axios.get('http://localhost:4000/dealer').then((response) => {
        res.send(response.data)
    }).catch((error) => {
        console.log(error);
    })
})

/**
 * @swagger
 * /dealer/{id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        type: string
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

//Get dealer by id
admin.get('/:id', authentication, (req, res) => {
    const id = req.params.id;
    axios.get('http://localhost:4000/dealer/' + id).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        console.log(error);
    })
})

//Post dealer
admin.post('/', authentication, (req, res) => {
    axios.post('http://localhost:4000/dealer/signup', req.body).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
    })
})

//Put dealer
admin.put('/:id', authentication, (req, res) => {
    const id = req.params.id;
    axios.patch('http://localhost:4000/dealer/' + id, req.body).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
    })
})

//Delete dealer
admin.delete('/:id', authentication, (req, res) => {
    const id = req.params.id;
    axios.patch('http://localhost:4000/dealer/' + id, req.body).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
    })
})

module.exports = admin;