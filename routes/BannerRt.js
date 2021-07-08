const express = require('express');

 const {
    getBannerById,
    updateBanner,
    deleteBanner
 } = require('../controller/BannerCtrl');
 const {
   getBannerData
 } =require('../controller/PublicCtrl');
 
 const bannerroute = express.Router();

 bannerroute.get('/banner', getBannerData);
 bannerroute.get('/banner/:id', getBannerById);
bannerroute.put('/banner/:id', updateBanner);
bannerroute.delete('/banner/:id', deleteBanner);
 
 module.exports = bannerroute;