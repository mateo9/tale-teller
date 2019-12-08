const Sequelize = require('sequelize');
const db = require('../config/database');

User = db.define('user', {
  user_name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  avatar: {
    type: Sequelize.STRING
  }
});

db.sync()

module.exports = User;