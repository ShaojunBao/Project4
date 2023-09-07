const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  items: [{
    item: { type: Schema.Types.ObjectId, ref: 'Item' },
    quantity: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now }
}, {
  timestamps: true
});

module.exports = orderSchema;