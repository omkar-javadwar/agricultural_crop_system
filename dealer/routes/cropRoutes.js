const express = require('express');
const cropControllers = require('../controllers/cropControllers');
const authentication = require('../../middleware/authentication');

const router = express.Router();

/**
 * @swagger
 * /dealer/crop/all:
 *   get:
 *     summary: Get all crops
 *     tags:
 *       - Crop Management
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

router.get("/crop/all", authentication, cropControllers.viewCrops);

/**
 * @swagger
 * /dealer/crop/search:
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
 *         description: Returns the requested dealer
 */

 router.get("/crop/search", authentication, cropControllers.searchCrop);

 module.exports = router;