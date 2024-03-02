const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './Database/SQGallerysqlite',
    logging: console.log,
});


module.exports = { Sequelize, sequelize };