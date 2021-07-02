const express = require('express');
const paymentControllers = require("../controllers/paymentControllers");

const router = express.Router();

/**
 * @swagger
 * /payment/{uid}:
 *   post:
 *     summary: Create payment by dealer_id
 *     tags:
 *       - Payment Management
 *     parameters:
 *      - in: path
 *        name: uid
 *        required: true
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
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

router.post('/:uid', paymentControllers.payment);

module.exports = router;