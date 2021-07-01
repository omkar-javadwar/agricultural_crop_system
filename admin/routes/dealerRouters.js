const express = require('express');
const authentication = require('../../middleware/authentication');
const dealerControllers = require('../controllers/dealerController');

const router = express.Router();

/**
 * @swagger
 * /dealer:
 *   get:
 *     summary: View all dealers
 *     tags:
 *       - Dealer Management
 *     responses:
 *       200:
 *         description: Requested by admin
 */

router.get('/', authentication, dealerControllers.viewDealers);

/**
 * @swagger
 * /dealer/{id}:
 *   get:
 *     summary: View dealer by id
 *     tags:
 *       - Dealer Management
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Requested by admin
 */

router.get('/:id', authentication, dealerControllers.viewDealer);

/**
 * @swagger
 * /dealer/signup:
 *   post:
 *     summary: Dealer signup
 *     tags:
 *       - Dealer Management
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
 *         description: Returns the requested admin
 */

router.post('/signup', authentication, dealerControllers.registerDealer);

/**
 * @swagger
 * /dealer/signin:
 *   post:
 *     summary: Dealer login
 *     tags:
 *       - Dealer Management
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
 *         description: Returns the requested admin
 */

router.post('/signin', authentication, dealerControllers.loginDealer);

/**
 * @swagger
 * /dealer/{id}:
 *   put:
 *     summary: Update dealer details
 *     tags:
 *       - Dealer Management
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
 *         description: Returns the requested admin
 */

router.put('/:id', authentication, dealerControllers.updateDealer);

/**
 * @swagger
 * /dealer/{id}:
 *   delete:
 *     summary: Remove dealer by id
 *     tags:
 *       - Dealer Management
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Requested by admin
 */

router.delete('/:id', authentication, dealerControllers.removeDealer);

/**
 * @swagger
 * /dealer:
 *   delete:
 *     summary: Remove all dealers
 *     tags:
 *       - Dealer Management
 *     responses:
 *       200:
 *         description: Requested by admin
 */

 router.delete('/', authentication, dealerControllers.removeDealers);

module.exports = router;