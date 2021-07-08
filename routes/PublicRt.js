const express = require('express');

 const {
    getPublicData
 } = require('../controller/PublicCtrl')

const publicroute = express.Router();

publicroute.get('/public', getPublicData);


module.exports = publicroute;