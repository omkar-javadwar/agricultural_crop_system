const express = require('express');
const dealerControllers = require('../controllers/dealerControllers');
const authentication = require('../../middleware/authentication');

const router = express.Router();

router.get('/', authentication, dealerControllers.viewDealers);

/**
 * @swagger
 * /dealer/{id}:
 *   get:
 *     summary: View dealer by ID
 *     tags:
 *       - Dealer Profile
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Returns the requested Dealer
 */

router.get('/:id', authentication, dealerControllers.viewDealer);

/**
 * @swagger
 * /dealer/signup:
 *   post:
 *     summary: Dealer signup
 *     tags:
 *       - Dealer Profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               contact:
 *                 type: string
 *               address:
 *                 type: object
 *                 properties:
 *                   street:
 *                     type: string
 *                   city:
 *                     type: string
 *                   state:
 *                     type: string
 *                   zip:
 *                     type: number
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

router.post('/signup', dealerControllers.registerDealer);

/**
 * @swagger
 * /dealer/signin:
 *   post:
 *     summary: Dealer login
 *     tags:
 *       - Dealer Profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

router.post('/signin', dealerControllers.loginDealer);

/**
 * @swagger
 * /dealer/{id}:
 *   put:
 *     summary: Update dealer details
 *     tags:
 *       - Dealer Profile
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               contact:
 *                 type: string
 *               address:
 *                 type: object
 *                 properties:
 *                   street:
 *                     type: string
 *                   city:
 *                     type: string
 *                   state:
 *                     type: string
 *                   zip:
 *                     type: number
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

router.put('/:id', authentication, dealerControllers.updateDealer);

/**
 * @swagger
 * /dealer/{id}:
 *   delete:
 *     summary: Delete dealer by Id
 *     tags:
 *       - Dealer Profile
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

router.delete('/:id', authentication, dealerControllers.removeDealer);

router.delete('/', authentication, dealerControllers.removeDealers);

module.exports = router;