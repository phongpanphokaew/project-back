const Sequelize = require('sequelize');
require('dotenv').config()
 //const sequelize = new Sequelize('database', 'username', 'password', {
    // host: 'localhost',
    // dialect: 'sqlite',
   //  storage: './Database/SQGallerysqlite',
   //  logging: console.log,
 //});
 console.log(process.env.DB_USERNAME);
 const dbUrl = 'postgres://webadmin:LFDoae08517@node62199-project.proen.app.ruk-com.cloud:11091';
const sequelize = new Sequelize(dbUrl);
module.exports = { Sequelize, sequelize };