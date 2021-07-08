const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Kategori =sequelize.define( "kategoris",{
    idkategori:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    namakategori:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    imagekategori:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    is_active:{
        type: Sequelize.INTEGER,
        defaultValue:1,
        allowNull:false,
    }
});

module.exports = Kategori;