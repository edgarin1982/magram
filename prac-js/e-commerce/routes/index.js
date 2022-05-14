const express = require('express');
const autheticate = require('../middlewares/authentication');
const router = express.Router();
const authenticate = require('../middlewares/authentication')


// Add the required routes
router.use('/auth', require('./auth'));

router.use('/products', authenticate, require('./products'));
router.use('/reviews', autheticate, require('./reviews'));
router.use('/users', autheticate, require('./users'));
router.use('/orders', authenticate, require('./orders'))

module.exports = router;
