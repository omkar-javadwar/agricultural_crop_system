const express = require('express');
const cartController = require('../controllers/cartBillControllers');

const router = express.Router();

router.get('/bill/:uid', cartController.viewDealerCart);

module.exports = router;