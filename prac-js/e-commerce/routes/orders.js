const express = require('express');
const router = express.Router();
const sequelize = require('../db');



// Get all products
router.get('/', async (req, res) => {
    const orders = await sequelize.models.orders.findAndCountAll()
    return res.status(200).json({ data: orders });
});

// Create a new product
router.post('/', async (req, res) => {
    const { body } = req;
    const order = await sequelize.models.orders.create({
        name: body.name,
        description: body.description,
        price: body.price,
        image: body.image,
    })
    await order.save();
    return res.status(201).json({ data: order })
});

// Update a product by id
router.put('/:id', async (req, res) => {
    const { body, params: { id } } = req;
    const order = await sequelize.models.orders.findByPk(id);
    if (!order) {
        return res.status(404).json({ code: 404, message: 'Order not found' });
      }

      const updatedProduct = await order.update({
        name: body.name,
        description: body.description,
        price: body.price,
        image: body.image,
      });
    
      return res.json({ data: updatedOrder });
});
// Delete a product by id
router.delete('/:id', async (req, res) => {
    const { params: { id } } = req;
    const order = await sequelize.models.orders.findByPk(id);
    if (!order) {
      return res.status(404).json({ code: 404, message: 'Order not found' });
    }
    await order.destroy();
    return res.json();
  
  });
  







module.exports = router;