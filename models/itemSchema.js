const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  imagePath: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = itemSchema;