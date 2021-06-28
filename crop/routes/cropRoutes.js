const express = require('express');
const cropControllers = require('../controllers/cropControllers');

const router = express.Router();

/**
 * @swagger
 * /crop/all:
 *   get:
 *     description: Get all crops
 *     responses:
 *       200:
 *         description: Returns the requested crop
 */

router.get('/all', cropControllers.viewCrops);

/**
 * @swagger
 * /crop:
 *   get:
 *     description: Get crop details
 *     parameters:
 *       - in: query
 *         name: cid
 *         description: Crop ID
 *       - in: query
 *         name: uid
 *         required: true
 *         description: User ID
 *     schema:
 *       type: object
 *     responses:
 *       200:
 *         description: Returns the requested crop
 */

router.get('/', cropControllers.viewCrop);

/**
 * @swagger
 * /crop:
 *   post:
 *     description: Create new crop
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               crop_name:
 *                 type: string
 *               user_id:
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
 *     description: Update crop
 *     parameters:
 *       - in: path
 *         name: cid
 *         schema:
 *           type: string
 *           required: true
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
 *     description: Delete crop by Id
 *     parameters:
 *      - in: path
 *        name: cid
 *        required: true
 *        type: string
 *        description: Crop ID
 *     responses:
 *       200:
 *         description: Returns the requested crop
 */

router.delete('/:cid', cropControllers.removeCropById);

/**
 * @swagger
 * /crop:
 *   delete:
 *     description: Delete all crops
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