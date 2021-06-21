const express = require('express');
const adminControllers = require('../controllers/adminControllers');
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

router.get('/:id', adminControllers.viewAdmin);

/**
 * @swagger
 * /admin:
 *   post:
 *     summary: Create new admin
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

router.post('/', adminControllers.addAdmin);

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

router.put('/:id', adminControllers.updateAdmin);

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
router.delete('/:id', adminControllers.removeAdmin);

module.exports = router;