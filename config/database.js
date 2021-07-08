const Sequelize = require("sequelize");


const sequelize = new Sequelize("sequelize","root","iphone6plus",{
dialect:"mysql",
host:"localhost",
});

module.exports =sequelize


/*
import { Sequelize } from "sequelize";
const db = new Sequelize('ujian_avows', 'root', 'iphone6plus', {
    host: 'localhost',
    dialect: 'mysql'
});
export default db;
*/