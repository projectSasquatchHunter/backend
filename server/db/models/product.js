const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  assetUrl: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Product;

