const express = require('express');
const cropControllers = require('../controllers/cropControllers');

const router = express.Router();

/**
 * @swagger
 * /crop:
 *   get:
 *     description: Get all crops
 *     responses:
 *       200:
 *         description: Returns the requested crop
 */

router.get('/', cropControllers.viewCrops);

/**
 * @swagger
 * /crop/{id}:
 *   get:
 *     summary: View crop by ID
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: Crop ID
 *     responses:
 *       200:
 *         description: Returns the requested crop
 */

router.get('/:id', cropControllers.viewCropById);

/**
 * @swagger
 * /crop:
 *   post:
 *     summary: Create new crop
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Returns the requested crop
 */
router.post('/', cropControllers.addCrop);

/**
 * @swagger
 * /crop/{id}:
 *   put:
 *     summary: Update crop details
 *     parameters:
 *       - in: path
 *         name: id
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
 *     responses:
 *       200:
 *         description: Returns the requested crop
 */
router.put('/:id', cropControllers.updateCrop);

/**
 * @swagger
 * /crop/{id}:
 *   delete:
 *     summary: Delete crop by Id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: Crop ID
 *     responses:
 *       200:
 *         description: Returns the requested crop
 */

router.delete('/:id', cropControllers.removeCropById);

/**
 * @swagger
 * /crop:
 *   delete:
 *     description: Delete all crops
 *     responses:
 *       200:
 *         description: Returns the requested crop
 */

router.delete('/', cropControllers.removeCrops);

module.exports = router;