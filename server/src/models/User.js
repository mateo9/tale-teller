const Sequelize = require('sequelize');
const db = require('../config/database');

const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt'))

User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
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
}, {
  hooks: {
    afterValidate: (user) => {
      user.password = bcrypt.hashSync(user.password, 10);
    }
  }
});

db.sync()

module.exports = User;