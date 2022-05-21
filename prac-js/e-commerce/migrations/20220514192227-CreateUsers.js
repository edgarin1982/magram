'use strict';

await queryInterface.createTable('users', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: Sequelize.STRING,
  lastname: Sequelize.STRING,
  type: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
})
await queryInterface.dropTable('users');


await queryInterface.createTable('orders', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      quantity: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
await queryInterface.dropTable('orders');


module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
