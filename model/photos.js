const { Sequelize, sequelize } = require('../db');
const Photo = sequelize.define('photo', {
    PhotoID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    AlbumID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'albums', 
            key: 'AlbumID'
        },
        onDelete: 'SET NULL'
    },
    PhotographerID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'photographers', 
            key: 'PhotographerID'
        },
        onDelete: 'SET NULL'
    },
    LocationID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'locations', 
            key: 'LocationID'
        },
        onDelete: 'SET NULL'
    },
    PhotoPath: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Caption: {
        type: Sequelize.STRING,
        allowNull: false 
    },
});

module.exports = { Photo };
