const express = require('express');
const authentication = require('../../middleware/authentication');
const farmerControllers = require('../controllers/farmerController');

const router = express.Router();

/**
 * @swagger
 * /farmer:
 *   get:
 *     summary: View all farmers
 *     tags:
 *       - Farmer Management
 *     responses:
 *       200:
 *         description: Requested by admin
 */

router.get('/', farmerControllers.viewFarmers);

/**
 * @swagger
 * /farmer/{id}:
 *   get:
 *     summary: View farmer by ID
 *     tags:
 *       - Farmer Management 
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Requested by admin
 */

router.get('/:id', farmerControllers.viewFarmer);

/**
 * @swagger
 * /farmer/signup:
 *   post:
 *     summary: Create new farmer
 *     tags:
 *       - Farmer Management
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
 *         description: Requested by admin
 */

router.post('/signup', farmerControllers.registerFarmer);

/**
 * @swagger
 * /farmer/signin:
 *   post:
 *     summary: Farmer login
 *     tags:
 *       - Farmer Management
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
 *         description: Requested by admin
 */

router.post('/signin', farmerControllers.loginFarmer);

/**
 * @swagger
 * /farmer/{id}:
 *   put:
 *     summary: Update farmer details
 *     tags:
 *       - Farmer Management
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
 *         description: Requested by admin
 */

router.put('/:id', farmerControllers.updateFarmer);

/**
 * @swagger
 * /farmer/{id}:
 *   delete:
 *     summary: Delete farmer by Id
 *     tags:
 *       - Farmer Management
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Requested by admin
 */

router.delete('/:id', farmerControllers.removeFarmer);

/**
* @swagger
* /farmer:
*   delete:
*     summary: Remove all farmers
*     tags:
*       - Farmer Management
*     responses:
*       200:
*         description: Requested by admin
*/

router.delete('/', farmerControllers.removeFarmers);

module.exports = router;