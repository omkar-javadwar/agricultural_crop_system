const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Get cart details by cart_id and user_id
 *     tags:
 *       - Cart Management
 *     parameters:
 *       - in: query
 *         name: cid
 *       - in: query
 *         name: uid
 *         required: true
 *     responses:
 *       200:
 *         description: Returns the requested cart
 */

router.get('/', cartController.viewCart);

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Create new cart
 *     tags:
 *       - Cart Management
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               crop_name:
 *                 type: string
 *               dealer_id:
 *                 type: string
 *               crop_quantity:
 *                 type: number
 *               crop_price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Returns the requested cart
 */

router.post('/', cartController.addCart);

/**
 * @swagger
 * /cart/{cid}:
 *   patch:
 *     summary: Create new cart
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
 *         description: Returns the requested cart
 */

router.patch('/:cid', cartController.updateCart);

/**
 * @swagger
 * /cart/{cid}:
 *   delete:
 *     summary: Remove crop by crop_id
 *     tags:
 *       - Cart Management
 *     parameters:
 *      - in: path
 *        name: cid
 *        required: true
 *     responses:
 *       200:
 *         description: Returns the requested cart
 */

router.delete('/:cid', cartController.removeCart);

/**
 * @swagger
 * /cart:
 *   delete:
 *     summary: Remove all crops for user_id
 *     tags:
 *       - Cart Management
 *     parameters:
 *       - in: query
 *         name: uid
 *         required: true
 *     responses:
 *       200:
 *         description: Returns the requested cart
 */

router.delete('/', cartController.removeCarts);

/**
 * @swagger
 * /cart/bill/{uid}:
 *   get:
 *     summary: Get bill
 *     tags:
 *       - Cart Management
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *     responses:
 *       200:
 *         description: Returns the requested cart
 */

router.get('/bill/:uid', cartController.viewBill);

module.exports = router;