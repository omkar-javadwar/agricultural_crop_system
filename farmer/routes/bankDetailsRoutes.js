const express = require('express');
const bankDetailsControllers = require('../controllers/bankDetailsControllers');

const router = express.Router();

router.get('/:id', bankDetailsControllers.getBankDetails);
router.put('/:id', bankDetailsControllers.updateBankDetails);

module.exports = router;