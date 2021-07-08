const express = require('express');

const {
    getBerita,
    getBeritaById,
    createBerita,
    updateBerita,
    deleteBerita,
    getBeritaByCat
    
  //  postBeritawithfoto

 } = require('../controller/BeritaCtrl');

const beritaroute = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/uploads/')
    },
    filename: function (req, file, cb) {
        console.log(file.mimetype);
        cb(null, Date.now() + "-" + file.originalname);
    }
    })

var upload = multer({ storage: storage });

beritaroute.get('/berita', getBerita);
beritaroute.get('/berita/:id', getBeritaById);
beritaroute.post('/berita', createBerita);
beritaroute.put('/berita/:id', updateBerita);
beritaroute.delete('/berita/:id', deleteBerita);
beritaroute.get('/pagefilter/:id', getBeritaByCat);
//beritaroute.post('/uploadimg',upload.single("imageUrl"),postBeritawithfoto);

beritaroute.post('/uploadimg', upload.single('imageUrl'),  (req, res,) => {
    if(req.file) {
        res.json(req.file);
        var namaImage = req.file.filename;
        console.log(namaImage);
        const firstArray = [req.body.title, req.body.content,req.body.idkategori,req.body.iduser];
        const secondArray = [req.file.filename];
        const dataUpload = firstArray.concat(secondArray)
        console.log(dataUpload);
    }
    else throw 'gagal';

/*     try {
        if(req.file) {
            res.json(req.file);
            var namaImage = req.file.filename;
            console.log(namaImage);
            const firstArray = [req.body.title, req.body.content,req.body.idkategori,req.body.iduser];
            const secondArray = [req.file.filename];
            const dataUpload = firstArray.concat(secondArray)
            console.log(dataUpload);
        }
        //if (error) return console.log(error)
    } catch (err) {
        console.log(err);
    } */

});


module.exports = beritaroute;


/*
    app.post('/upload', upload.single('photo'), (req, res) => {
        if(req.file) {
            res.json(req.file);
        }
        else throw 'error';
    });
    */

