const express = require('express');
const bankDetailsControllers = require('../controllers/bankDetailsControllers');
const authentication = require('../../middleware/authentication');

const router = express.Router();

/**
 * @swagger
 * /bank_details/{id}:
 *   get:
 *     summary: View bank_details by ID
 *     tags:
 *       - Bank Details Management
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: Farmer ID
 *     responses:
 *       200:
 *         description: Returns the requested bank_details
 */

router.get('/:id', authentication, bankDetailsControllers.getBankDetails);

/**
 * @swagger
 * /bank_details/{id}:
 *   put:
 *     summary: Update bank_details details
 *     tags:
 *       - Bank Details Management
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           required: true
 *           description: Farmer ID
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

router.put('/:id', authentication, bankDetailsControllers.updateBankDetails);

module.exports = router;