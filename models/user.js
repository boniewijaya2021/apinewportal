const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User =sequelize.define("users",{
    iduser:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    name:{
        type: Sequelize.STRING,
        allowNull:false,
        
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    password:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    status:{
        type: Sequelize.INTEGER,
        allowNull:true,
        
    }
});

module.exports = User;