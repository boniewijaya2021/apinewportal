const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Logo =sequelize.define( "logos",{
    idlogo:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    imagelogo:{
        type: Sequelize.STRING,
        allowNull:false,
    }
});

module.exports = Logo;