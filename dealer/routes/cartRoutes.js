const express = require('express');
const dealerControllers = require('../controllers/cartControllers');
const authentication = require('../../middleware/authentication');

const router = express.Router();

/**
 * @swagger
 * /dealer/crop/all:
 *   get:
 *     description: Get all crops
 *     responses:
 *       200:
 *         description: Returns the requested crop
 */

 router.get("/crop/all",   dealerControllers.viewCrops);

/**
 * @swagger
 * /dealer/{uid}/crop:
 *   get:
 *     summary: View crop by dealer ID
 *     tags:
 *       - Cart Management
 *     parameters:
 *      - in: path
 *        name: uid
 *        required: true
 *        type: string
 *        description: dealer ID
 *     responses:
 *       200:
 *         description: Returns the requested dealer
 */

 router.get("/:uid/crop",   dealerControllers.viewCrop);

 /**
  * @swagger
  * /dealer/{uid}/crop:
  *   post:
  *     summary: Create new crop by dealer ID
  *     tags:
  *       - Cart Management
  *     parameters:
  *      - in: path
  *        name: uid
  *        required: true
  *        type: string
  *        description: dealer ID
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:
  *               crop_name:
  *                 type: string
  *               crop_tag:
  *                 type: string
  *               crop_quantity:
  *                 type: number
  *               crop_price:
  *                 type: number
  *     responses:
  *       200:
  *         description: Returns the requested dealer
  */
 
 router.post("/:uid/crop",   dealerControllers.addCrop);
 
 /**
  * @swagger
  * /dealer/{cid}/crop:
  *   put:
  *     summary: Update dealer details
  *     tags:
  *       - Cart Management
  *     parameters:
  *       - in: path
  *         name: cid
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
  *             properties:
  *               crop_quantity:
  *                 type: number
  *     responses:
  *       200:
  *         description: Returns the requested dealer
  */
 
 router.put("/:cid/crop",   dealerControllers.updateCrop);
 
 /**
  * @swagger
  * /dealer/{cid}/crop:
  *   delete:
  *     summary: Delete a crop by dealer Id
  *     tags:
  *       - Cart Management
  *     parameters:
  *      - in: path
  *        name: cid
  *        required: true
  *        type: string
  *      - in: query
  *        name: uid
  *        required: true
  *     responses:
  *       200:
  *         description: Returns the requested dealer
  */
 
 router.delete("/:cid/crop",   dealerControllers.removeCrop);
 
 module.exports = router;