const {Sequelize} = require('sequelize');

const Product = require('./models/Product');
const Review = require('./models/Review');
const User = require('./models/User');
const Order = require('./models/Order');
//const sequelize = require('./db')

// Database connection
const sequelize = new Sequelize('ecommerce-api', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
  });

  // Getting models
const models = [
    Product,
    Review,
    User,
    Order,
  ];
// Registering models into Sequelize
for (let model of models) {
    model(sequelize);
  }


const{products, reviews, users, orders } = sequelize.models
reviews.belongsTo(products)
orders.belongsTo(users)
orders.belongsTo(products)


module.exports = sequelize;














