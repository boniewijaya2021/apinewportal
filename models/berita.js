const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Berita =sequelize.define("beritas",{
    idberita:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    title:{
        type: Sequelize.STRING,
        allowNull:false,
        
    },
    content:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    idkategori:{
        type: Sequelize.INTEGER,
        allowNull:false,
    },
    iduser:{
        type: Sequelize.INTEGER,
        allowNull:false,
        
    },
    img:{
        type: Sequelize.STRING,
        allowNull:true,
        
    }
    /*,
    status:{
        type: Sequelize.INTEGER,
        allowNull:true,
        
    }*/
});

module.exports = Berita;