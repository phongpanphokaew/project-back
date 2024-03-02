const { Sequelize, sequelize } = require('../db');
const Album = sequelize.define('album', {
    AlbumID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    AlbumName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Description: {
        type: Sequelize.STRING,
        allowNull: false
    },

});


module.exports = { Album }