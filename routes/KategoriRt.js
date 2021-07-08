const express = require('express');

 const {
    getKategori,
    getKategoriById,
    /*createKategori,*/
    updateKategori,
    deleteKategori
 } = require('../controller/KategoriCtrl')
 
 // Init express router
 const kategoriroute = express.Router();

 kategoriroute.get('/kategori', getKategori);
 kategoriroute.get('/kategori/:id', getKategoriById);
// kategoriroute.post('/kategori', createKategori);
 kategoriroute.put('/kategori/:id', updateKategori);
 kategoriroute.delete('/kategori/:id', deleteKategori);
 
 module.exports = kategoriroute;