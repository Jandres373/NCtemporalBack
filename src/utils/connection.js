const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize({
  dialect: 'mysql',
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  dialectOptions: {
    ssl: {
      required: false,
    },
  },
  define: {
    timestamps: false,
  },
})

module.exports = sequelize;