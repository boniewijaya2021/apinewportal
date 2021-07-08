const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/public/')
    },
    filename: function (req, file, cb) {
        console.log(file.mimetype);
        cb(null, Date.now() + "-" + file.originalname);
    }
    })

const upload = multer({ storage: storage });

const {
    createUpload
 } = require('./controller/BeritaCtrl');
 const {
    createKategori,
    updateKategoriImg
 } = require('./controller/KategoriCtrl');
const {
    getLogo,
    createLogo,
    updateLogo,
    deleteLogo
} = require('./controller/LogoCtrl');
const {
    createBanner,
} = require('./controller/BannerCtrl')
const multerupload = express.Router();

multerupload.post('/uploadimg', upload.single('imageUrl'), createUpload);

multerupload.post('/uploadimgkategori', upload.single('imageUrl'), createKategori);
multerupload.post('/editkategori/:id',upload.single('imageUrl'), updateKategoriImg);

multerupload.post('/uploadimglogo', upload.single('imageUrl'), createLogo);
multerupload.post('/editlogo/:id',upload.single('imageUrl'), updateLogo);
multerupload.delete('/deletedlogo/:id', deleteLogo);
multerupload.get('/logo', getLogo);

multerupload.post('/uploadimgbanner', upload.single('imageUrl'), createBanner);


module.exports = multerupload;




