const express = require('express');
const farmerControllers = require('../controllers/farmerControllers');

const router = express.Router();

router.get('/:id', farmerControllers.viewFarmerById);
router.post('/', farmerControllers.addFarmer);
router.put('/:id', farmerControllers.updateFarmer);
router.delete('/:id', farmerControllers.removeFarmer);

module.exports = router;