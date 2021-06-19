const express = require('express');
const dealerControllers = require('../controllers/dealerControllers');

const router = express.Router();

router.get('/:id',dealerControllers.viewDealerById);
router.post('/',dealerControllers.addDealer);
router.put('/:id',dealerControllers.updateDealer);
router.delete('/:id',dealerControllers.removeDealer);

module.exports = router;