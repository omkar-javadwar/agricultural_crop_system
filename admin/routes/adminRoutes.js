const express = require('express');
const adminControllers = require('../controllers/adminControllers');
const authentication = require('../../middleware/authentication');

const router = express.Router();

/**
 * @swagger
 * /admin/{id}:
 *   get:
 *     summary: View admin
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: Admin ID
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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: username
 *               password:
 *                 type: string
 *                 description: password                         
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
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               username:
*                 type: string
*                 description: username
*               password:
*                 type: string
*                 description: password                         
*     responses:
*       200:
*         description: Returns the requested admin
*/

router.post('/signin', authentication, adminControllers.loginAdmin);

/**
 * @swagger
 * /admin/{id}:
 *      put:
 *          summary: Update admin password.
 *          parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: Admin id
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                            username:
 *                              type: string
 *                              description: username
 *                            password:
 *                              type: string
 *                              description: password              
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
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: Admin ID.
 *     description: Delete admin by id
 *     responses:
 *       200:
 *         description: Returns the requested admin
 */
router.delete('/:id', authentication, adminControllers.removeAdmin);

module.exports = router;