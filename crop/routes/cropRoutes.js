const express = require('express');
const cropControllers = require('../controllers/cropControllers');

const router = express.Router();

/**
 * @swagger
 * /crop/all:
 *   get:
 *     summary: Get all crops details
 *     tags:
 *       - Crop Management
 *     responses:
 *       200:
 *         description: Returns the requested crop
 */

router.get('/all', cropControllers.viewCrops);

/**
 * @swagger
 * /crop:
 *   get:
 *     summary: Get crop details by crop_id and user_id
 *     tags:
 *       - Crop Management
 *     parameters:
 *       - in: query
 *         name: cid
 *       - in: query
 *         name: uid
 *         required: true
 *     responses:
 *       200:
 *         description: Returns the requested crop
 */

router.get('/', cropControllers.viewCrop);

/**
 * @swagger
 * /crop/search:
 *   get:
 *     summary: Get crop details by crop_name and crop_tag
 *     tags:
 *       - Crop Management
 *     parameters:
 *       - in: query
 *         name: crop_name
 *       - in: query
 *         name: crop_tag
 *     responses:
 *       200:
 *         description: Returns the requested crop
 */

router.get('/search', cropControllers.searchCrop);

/**
 * @swagger
 * /crop:
 *   post:
 *     summary: Create new crop
 *     tags:
 *       - Crop Management
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               crop_name:
 *                 type: string
 *               farmer_id:
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
 *         description: Returns the requested crop
 */

router.post('/', cropControllers.addCrop);

/**
 * @swagger
 * /crop/{cid}:
 *   put:
 *     summary: Update crop details
 *     tags:
 *       - Crop Management
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
 *               crop_price:
 *                 type: number
 *               crop_description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Returns the requested crop
 */

router.put('/:cid', cropControllers.updateCrop);

/**
 * @swagger
 * /crop/{cid}:
 *   delete:
 *     summary: Remove crop by crop_id
 *     tags:
 *       - Crop Management
 *     parameters:
 *      - in: path
 *        name: cid
 *        required: true
 *     responses:
 *       200:
 *         description: Returns the requested crop
 */

router.delete('/:cid', cropControllers.removeCropById);

/**
 * @swagger
 * /crop:
 *   delete:
 *     summary: Remove all crops for user_id
 *     tags:
 *       - Crop Management
 *     parameters:
 *       - in: query
 *         name: uid
 *         required: true
 *     responses:
 *       200:
 *         description: Returns the requested crop
 */

router.delete('/', cropControllers.removeCrops);

module.exports = router;