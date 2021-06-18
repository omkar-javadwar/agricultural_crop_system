const express = require('express');
const paymentController = require("../controllers/paymentController");

const router = express.Router();

router.get('/', paymentController.getPayment);
router.get('/:id', paymentController.getPaymentById);
router.post('/', paymentController.createPayment);
// router.put('/:id', paymentController.updatePayment);
router.delete('/', paymentController.deletePayments);
router.delete('/:id', paymentController.deletePaymentById);

module.exports = router;