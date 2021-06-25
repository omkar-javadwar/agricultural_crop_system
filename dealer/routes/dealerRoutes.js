const express = require('express');
const dealerControllers = require('../controllers/dealerControllers');

const router = express.Router();

/**
 * @swagger
 * /dealer/{id}:
 *   get:
 *     summary: View dealer by ID
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: Dealer ID
 *     responses:
 *       200:
 *         description: Returns the requested Dealer
 */

router.get('/:id', dealerControllers.viewDealerById);

/**
 * @swagger
 * /dealer:
 *   post:
 *     summary: Create new dealer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

router.post('/', dealerControllers.addDealer);

/**
 * @swagger
 * /dealer/{id}:
 *   put:
 *     summary: Update dealer details
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           required: true
 *           description: Dealer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

router.put('/:id', dealerControllers.updateDealer);

/**
 * @swagger
 * /dealer/{id}:
 *   delete:
 *     summary: Delete dealer by Id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: Dealer ID
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

router.delete('/:id', dealerControllers.removeDealer);

module.exports = router;