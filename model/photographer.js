const { Sequelize, sequelize } = require('../db');
const Photographer = sequelize.define('photographer', {
    PhotographerID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Bio: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = { Photographer }