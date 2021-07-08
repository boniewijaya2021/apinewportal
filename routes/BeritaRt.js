const express = require('express');

const {
    getBerita,
    getBeritaById,
    createBerita,
    updateBerita,
    deleteBerita,
    getBeritaByCat,
    getPopuler
    
 

 } = require('../controller/BeritaCtrl');

const beritaroute = express.Router();


beritaroute.get('/berita', getBerita);
beritaroute.get('/berita/:id', getBeritaById);
beritaroute.post('/berita', createBerita);
beritaroute.put('/berita/:id', updateBerita);
beritaroute.delete('/berita/:id', deleteBerita);
beritaroute.get('/pagefilter/:id', getBeritaByCat);
beritaroute.get('/kananatas', getPopuler);




module.exports = beritaroute;




