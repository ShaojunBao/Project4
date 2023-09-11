const Order = require('../../models/order');

module.exports = {
  index,
  show,
  create,
  delete: deleteOrder,
  update
};

async function index(req, res) {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('items.item').exec();
    res.json(orders);
  } catch (error) {
    res.json({ error: error.message });
  }
}

async function show(req, res) {
    try {
      const order = await Order.findById(req.params.id).populate('items.item').exec();
      if (order) {
        res.json(order);
      } else {
        res.json({ error: 'Order not found' });
      }
    } catch (error) {
      res.json({ error: error.message });
    }
}

async function create(req, res) {
  try {
    const order = await Order.create({...req.body, user: req.user._id});
    res.json(order);
  } catch (error) {
    res.json({ error: error.message });
  }
}

async function deleteOrder(req, res) {
  try {
    const deletedOrder = await Order.findByIdAndRemove(req.params.id);
    res.json(deletedOrder);
  } catch (error) {
    res.json({ error: error.message });
  }
}

async function update(req, res) {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    ).populate('items.item').exec();

    if (!updatedOrder) {
      res.status(404).json({ error: 'Order not found' });
      return;
    }

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}