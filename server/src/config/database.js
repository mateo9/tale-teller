const Sequelize = require('sequelize');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5433/tt-development';

module.exports = new Sequelize(connectionString);
