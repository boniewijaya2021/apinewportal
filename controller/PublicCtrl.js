const { QueryTypes } = require('sequelize');
const sequelize = require("../config/database");

 const getPublicData = async (req, res) => {
    try {
        const public = await sequelize.query("SELECT a.*,b.namakategori as namakategori, c.name  as kontributor FROM beritas a left join kategoris b on a.idkategori = b.idkategori left join users c on c.iduser = a.iduser where b.is_active=1", { type: QueryTypes.SELECT });
        res.send(public);
    } catch (err) {
        console.log(err);
    }
}
const getBannerData = async (req, res) => {
    try {
        const public = await sequelize.query("SELECT a.*,b.namakategori as namakategori FROM banners a left join kategoris b on a.idkategori = b.idkategori" , { type: QueryTypes.SELECT });
        res.send(public);
    } catch (err) {
        console.log(err);
    }
}
 

module.exports = {
    getPublicData,
    getBannerData
    
}