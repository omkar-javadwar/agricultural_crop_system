const express = require('express');
const farmerController = require('../controllers/farmerController');
const authentication = require('../../middleware/authentication');

const router = express.Router();

/**
 * @swagger
 * /dealer/{uid}/farmer:
 *   get:
 *     summary: View farmer by ID
 *     tags:
 *       - Farmer Details
 *     parameters:
 *      - in: path
 *        name: uid
 *        required: true
 *     responses:
 *       200:
 *         description: Returns the requested Dealer
 */

router.get('/:uid/farmer',   farmerController.viewFarmer);

module.exports = router;