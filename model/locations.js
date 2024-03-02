const { Sequelize, sequelize } = require('../db');
const Location = sequelize.define('location', {
    LocationID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    LocationName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Description: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = { Location }