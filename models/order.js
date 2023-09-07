const mongoose = require('mongoose');
require('./item');
const orderSchema = require('./orderSchema.js');

module.exports = mongoose.model('Order', OrderSchema);