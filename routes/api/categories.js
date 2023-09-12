const express = require('express');
const router = express.Router();
const categoryCtrl = require('../../controllers/api/categories');

router.get('/', categoryCtrl.getAllCategories);

module.exports = router;