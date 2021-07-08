const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Banner =sequelize.define( "banners",{
    idbanner:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    namabanner:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    idkategori:{
        type: Sequelize.INTEGER,
        allowNull:false,
    },
    imagebanner:{
        type: Sequelize.STRING,
        allowNull:false,
    }
});

module.exports = Banner;