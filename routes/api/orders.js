const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

//GET /api/orders
router.get('/', ordersCtrl.index);
//GET /api/orders/:id
router.get('/:id', ordersCtrl.show);
//POST /api/orders
router.post('/', ordersCtrl.create);
//DELETE /api/orders/:id
router.delete('/:id', ordersCtrl.delete);

module.exports = router;