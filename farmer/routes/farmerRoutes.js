const express = require('express');
const farmerControllers = require('../controllers/farmerControllers');

const router = express.Router();

/**
 * @swagger
 * /farmer/{id}:
 *   get:
 *     summary: View farmer by ID
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: Farmer ID
 *     responses:
 *       200:
 *         description: Returns the requested farmer
 */

router.get('/:id', farmerControllers.viewFarmerById);

/**
 * @swagger
 * /farmer:
 *   post:
 *     summary: Create new farmer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Returns the requested farmer
 */

router.post('/', farmerControllers.addFarmer);

/**
 * @swagger
 * /farmer/{id}:
 *   put:
 *     summary: Update farmer details
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
 *         description: Returns the requested farmer
 */

router.put('/:id', farmerControllers.updateFarmer);

/**
 * @swagger
 * /farmer/{id}:
 *   delete:
 *     summary: Delete farmer by Id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: Farmer ID
 *     responses:
 *       200:
 *         description: Returns the requested farmer
 */

router.delete('/:id', farmerControllers.removeFarmer);

module.exports = router;