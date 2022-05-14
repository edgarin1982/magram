const {DataTypes} = require('sequelize');
//const sequelize = require('../db');

nodule.exports = (sequelize) => sequelize.define('orders',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},


    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        onDelete: 'CASCADE',
    },
    productId:{
        type: DataTypes.INTEGER,
        references: {
            model: 'products',
            key: 'id',
        },
        onDelete : 'CASCADE',
    },
    quanty : DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE,
});