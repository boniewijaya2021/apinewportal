const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Likedislike =sequelize.define( "likedislike",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    idberita:{
        type: Sequelize.INTEGER,
        allowNull:false,
    },
    idkategori:{
        type: Sequelize.INTEGER,
        allowNull:false,
    },
    iduser:{
        type: Sequelize.INTEGER,
        allowNull:false,
        
    }
});

module.exports = Likedislike;