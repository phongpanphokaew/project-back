const Sequelize = require('sequelize');
require('dotenv').config()
 //const sequelize = new Sequelize('database', 'username', 'password', {
    // host: 'localhost',
    // dialect: 'sqlite',
   //  storage: './Database/SQGallerysqlite',
   //  logging: console.log,
 //});
 console.log(process.env.DB_USERNAME);
 const dbUrl = 'postgres://webadmin:LFDoae08517@node62198-project.proen.app.ruk-com.cloud/';
const sequelize = new Sequelize(dbUrl);
module.exports = { Sequelize, sequelize };