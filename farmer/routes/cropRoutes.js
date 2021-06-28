const express = require('express');
const farmerControllers = require('../controllers/cropControllers');
const authentication = require('../../middleware/authentication');

const router = express.Router();

/**
 * @swagger
 * /farmer/{uid}/crop:
 *   get:
 *     summary: View crop by farmer ID
 *     tags:
 *       - Crop Management
 *     parameters:
 *      - in: path
 *        name: uid
 *        required: true
 *        type: string
 *        description: Farmer ID
 *     responses:
 *       200:
 *         description: Returns the requested farmer
 */

router.get("/:uid/crop", authentication, farmerControllers.viewCrop);

/**
 * @swagger
 * /farmer/{uid}/crop:
 *   post:
 *     summary: Create new crop by Farmer ID
 *     tags:
 *       - Crop Management
 *     parameters:
 *      - in: path
 *        name: uid
 *        required: true
 *        type: string
 *        description: Farmer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               crop_name:
 *                 type: string
 *               crop_tag:
 *                 type: string
 *               crop_quantity:
 *                 type: number
 *               crop_price:
 *                 type: number
 *               crop_description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Returns the requested farmer
 */

router.post("/:uid/crop", authentication, farmerControllers.addCrop);

/**
 * @swagger
 * /farmer/{cid}/crop:
 *   put:
 *     summary: Update farmer details
 *     tags:
 *       - Crop Management
 *     parameters:
 *       - in: path
 *         name: cid
 *         schema:
 *           type: string
 *           required: true
 *           description: Crop ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               crop_quantity:
 *                 type: number
 *               crop_price:
 *                 type: number
 *               crop_description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Returns the requested farmer
 */

router.put("/:cid/crop", authentication, farmerControllers.updateCrop);

/**
 * @swagger
 * /farmer/{cid}/crop:
 *   delete:
 *     summary: Delete a crop using crop_id and user_id
 *     tags:
 *       - Crop Management
 *     parameters:
 *      - in: path
 *        name: cid
 *        required: true
 *        type: string
 *      - in: query
 *        name: uid
 *        required: true
 *     responses:
 *       200:
 *         description: Returns the requested farmer
 */

router.delete("/:cid/crop", authentication, farmerControllers.removeCrop);

module.exports = router;