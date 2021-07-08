const express = require('express');
const multer = require('multer'); 
//const x = require('./uploads')
var storage = multer.diskStorage({
    /*
    destination: function (req, file, callback) {callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        if (!file.originalname.match(/\.(jpg|png|JPEG)$/)) {
            var err = new Error();
            err.code = 'filetype';
            return callback(err);
        } else {
            callback(null, Date.now() + file.originalname);
        }
    }
    */
   destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        console.log(file.mimetype);
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const upload = multer({ storage: storage });
module.exports = upload;
/*
var upload = multer({ storage: storage, limits: { fileSize: 1000000 } }).single('imageUrl');
module.exports = upload;
*/
/*
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        console.log(file.mimetype);
        cb(null, Date.now() + "-" + file.originalname);
    }
    })
const uploader = multer({ storage: storage });
module.exports = uploader;
*/
