const express = require('express');
const farmerControllers = require('../controllers/farmerControllers');
const authentication = require('../../middleware/authentication');

const router = express.Router();

/**
 * @swagger
 * /farmer/{id}:
 *   get:
 *     summary: View farmer by ID
 *     tags:
 *       - Farmer Profile 
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Returns the requested farmer
 */

router.get('/:id', authentication, farmerControllers.viewFarmer);

/**
 * @swagger
 * /farmer/signup:
 *   post:
 *     summary: Create new farmer
 *     tags:
 *       - Farmer Profile
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
 *               password:
 *                 type: string
 *               contact:
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
 *               bank_details:
 *                 type: object
 *                 properties:
 *                   net_banking:
 *                     type: object
 *                     properties:
 *                       bank_name:
 *                         type: string
 *                       account_number:
 *                         type: string
 *                       IFSC_code:
 *                         type: string
 *                   UPI:
 *                     type: object
 *                     properties:
 *                       upi_id:
 *                         type: string
 *     responses:
 *       200:
 *         description: Returns the requested farmer
 */

router.post('/signup', farmerControllers.addFarmer);

/**
 * @swagger
 * /farmer/signin:
 *   post:
 *     summary: Farmer login
 *     tags:
 *       - Farmer Profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Returns the requested farmer
 */

router.post('/signin', authentication, farmerControllers.loginFarmer);

/**
 * @swagger
 * /farmer/{id}:
 *   put:
 *     summary: Update farmer details
 *     tags:
 *       - Farmer Profile
 *     parameters:
 *       - in: path
 *         name: id
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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               contact:
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
 *     responses:
 *       200:
 *         description: Returns the requested farmer
 */

router.put('/:id', authentication, farmerControllers.updateFarmer);

/**
 * @swagger
 * /farmer/{id}:
 *   delete:
 *     summary: Delete farmer by Id
 *     tags:
 *       - Farmer Profile
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Returns the requested farmer
 */

router.delete('/:id', authentication, farmerControllers.removeFarmer);

module.exports = router;