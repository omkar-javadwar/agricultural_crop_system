const express = require('express');
const adminControllers = require('../controllers/adminControllers');
const authentication = require('../../middleware/authentication');

const router = express.Router();

/**
 * @swagger
 * /admin/{id}:
 *   get:
 *     summary: View admin
 *     tags:
 *       - Admin Profile
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     description: Get admin by id
 *     responses:
 *       200:
 *         description: Returns the requested admin
 */

router.get('/:id', authentication, adminControllers.viewAdmin);

/**
 * @swagger
 * /admin/signup:
 *   post:
 *     summary: Admin registration
 *     tags:
 *       - Admin Profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Returns the requested admin
 */

router.post('/signup', adminControllers.registerAdmin);

/**
* @swagger
* /admin/signin:
*   post:
*     summary: Admin login
*     tags:
*       - Admin Profile
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               username:
*                 type: string
*               password:
*                 type: string
*     responses:
*       200:
*         description: Returns the requested admin
*/

router.post('/signin', adminControllers.loginAdmin);

/**
 * @swagger
 * /admin/{id}:
 *      put:
 *          summary: Update admin password.
 *          tags:
 *              - Admin Profile 
 *          parameters:
 *            - in: path
 *              name: id
 *              required: true
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                            username:
 *                              type: string
 *                            password:
 *                              type: string
 *          responses:
 *              '200':
 *                  description: Returns the requested admin
 */

router.put('/:id', authentication, adminControllers.updateAdmin);

/**
 * @swagger
 * /admin/{id}:
 *   delete:
 *     summary: Delete admin
 *     tags:
 *       - Admin Profile
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     description: Delete admin by id
 *     responses:
 *       200:
 *         description: Returns the requested admin
 */
router.delete('/:id', authentication, adminControllers.removeAdmin);

module.exports = router;