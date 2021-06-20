const express = require('express');
const adminControllers = require('../controllers/adminControllers');

const router = express.Router();

router.get('/:id', adminControllers.viewAdmin);
router.post('/', adminControllers.addAdmin);
router.put('/:id', adminControllers.updateAdmin);
router.delete('/:id', adminControllers.removeAdmin);

module.exports = router;