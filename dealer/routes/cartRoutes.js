const express = require('express');
const cartControllers = require('../controllers/cartControllers');
const authentication = require('../../middleware/authentication');

const router = express.Router();

/**
 * @swagger
 * /dealer/{uid}/cart:
 *   get:
 *     summary: View crop by dealer ID
 *     tags:
 *       - Cart Management
 *     parameters:
 *      - in: path
 *        name: uid
 *        required: true
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

router.get("/:uid/cart", authentication, cartControllers.viewCart);

/**
 * @swagger
 * /dealer/{uid}/cart:
 *   post:
 *     summary: Create new crop by dealer ID
 *     tags:
 *       - Cart Management
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
 *               crop_name:
 *                 type: string
 *               crop_quantity:
 *                 type: number
 *               crop_price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

router.post("/:uid/cart", authentication, cartControllers.addCrop);


/**
 * @swagger
 * /dealer/{cid}/cart:
 *   patch:
 *     summary: Update cart details
 *     tags:
 *       - Cart Management
 *     parameters:
 *       - in: path
 *         name: cid
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               crop_quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

router.patch('/:cid/cart', authentication, cartControllers.updateCart);

/**
 * @swagger
 * /dealer/{cid}/cart:
 *   delete:
 *     summary: Delete a crop by crop_id and dealer_id
 *     tags:
 *       - Cart Management
 *     parameters:
 *      - in: path
 *        name: cid
 *        required: true
 *      - in: query
 *        name: uid
 *        required: true
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

router.delete("/:cid/cart", authentication, cartControllers.removeCrop);

/**
 * @swagger
 * /dealer/{uid}/cart/bill:
 *   get:
 *     summary: View bill by dealer ID
 *     tags:
 *       - Cart Management
 *     parameters:
 *      - in: path
 *        name: uid
 *        required: true
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

router.get("/:uid/cart/bill", authentication, cartControllers.viewBill);

/**
 * @swagger
 * /dealer/{uid}/cart/bill:
 *   post:
 *     summary: Create payment by dealer_id
 *     tags:
 *       - Cart Management
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
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

router.post("/:uid/cart/bill", authentication, cartControllers.payBill);

module.exports = router;