const express = require('express');
const { orderController } = require('../controllers');
const router = express.Router();

router.get('/order', orderController.getOrders);
router.post('/order', orderController.createOrders);

module.exports = router;