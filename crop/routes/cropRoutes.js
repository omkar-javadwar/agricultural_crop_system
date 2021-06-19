const express = require('express');
const cropControllers = require('../controllers/cropControllers');

const router = express.Router();

router.get('/', cropControllers.viewCrops);
router.get('/:id', cropControllers.viewCropById);
router.post('/', cropControllers.addCrop);
router.put('/:id', cropControllers.updateCrop);
router.delete('/:id', cropControllers.removeCropById);
router.delete('/', cropControllers.removeCrops);

module.exports = router;