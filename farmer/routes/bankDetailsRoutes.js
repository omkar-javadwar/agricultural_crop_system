const express = require('express');
const bankDetailsControllers = require('../controllers/bankDetailsControllers');

const router = express.Router();

/**
 * @swagger
 * /bank_details/{id}:
 *   get:
 *     summary: View bank_details by ID
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: Bank details ID
 *     responses:
 *       200:
 *         description: Returns the requested bank_details
 */

router.get('/:id', bankDetailsControllers.getBankDetails);

/**
 * @swagger
 * /bank_details/{id}:
 *   put:
 *     summary: Update bank_details details
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           required: true
 *           description: Bank details ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Returns the requested bank_details
 */

router.put('/:id', bankDetailsControllers.updateBankDetails);

module.exports = router;