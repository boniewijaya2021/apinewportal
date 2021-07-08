const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Komentar =sequelize.define("komentar",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    isi:{
        type: Sequelize.STRING,
        allowNull:false,
        
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
        
    },
    status:{
        type: Sequelize.INTEGER,
        allowNull:true,
        
    }
});

module.exports = Komentar;