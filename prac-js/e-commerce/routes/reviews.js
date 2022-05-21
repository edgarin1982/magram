const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission')




// Get all products
router.get('/', permission('admin', 'client'),  async (req, res) => {
    const reviews = await sequelize.models.reviews.findAndCountAll()
    return res.status(200).json({ data: reviews });
});

// Create a new product
router.post('/',  permission('admin', 'client'), async (req, res) => {
    const { body } = req;
    const review = await sequelize.models.reviews.create({
        name: body.name,
        description: body.description,
        price: body.price,
        image: body.image,
    })
    await review.save();
    return res.status(201).json({ data: review })
});

// Update a product by id
router.put('/:id',  permission('admin'), async (req, res) => {
    const { body, params: { id } } = req;
    const review = await sequelize.models.reviews.findByPk(id);
    if (!product) {
        return res.status(404).json({ code: 404, message: 'Review not found' });
      }

      const updatedReview = await review.update({
        name: body.name,
        description: body.description,
        price: body.price,
        image: body.image,
      });
    
      return res.json({ data: updatedReview });
});
// Delete a product by id
router.delete('/:id',  permission('admin'), async (req, res) => {
    const { params: { id } } = req;
    const review = await sequelize.models.reviews.findByPk(id);
    if (!review) {
      return res.status(404).json({ code: 404, message: 'Review not found' });
    }
    await review.destroy();
    return res.json();
  
  });
  







module.exports = router;