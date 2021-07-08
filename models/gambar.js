const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Gambar =sequelize.define( "gambars",{
    idgambar:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    idberita:{
        type: Sequelize.INTEGER,
        allowNull:false,
    }
});

module.exports = Gambar;