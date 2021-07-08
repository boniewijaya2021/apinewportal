const Kategori = require('../models/Kategori');
//const { QueryTypes } = require('sequelize');

 const getKategori = async (req, res) => {
    try {
        const kategori = await Kategori.findAll({
            where:{
                is_active:1
            }
        });
        res.send(kategori);
    } catch (err) {
        console.log(err);
    }
}
 
 const getKategoriById = async (req, res) => {
    try {
        const kategori = await Kategori.findAll({
            where: {
                idkategori: req.params.id
            }
        });
        res.send(kategori[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create Kategori baru

 const createKategori = async (req, res) => {
    if(req.file) {
        
        var namaImage = req.file.filename;

        const newKategori = {
        namakategori: req.body.namakategori,
        imagekategori : namaImage
        }
       // console.log(req.body);
        
        try {
            await Kategori.create(newKategori);
            res.json(req.file);
            //res.json(req.file);
        } catch (err) {
            console.log(err);
        }

    }
}
 
// Update Kategori berdasarkan id
const updateKategoriImg = async (req, res) => {
    if(req.file) {
        
        var namaImage = req.file.filename;

        const newKategori = {
        namakategori: req.body.namakategori,
        imagekategori : namaImage
        }
        try {
            await Kategori.update(newKategori,{
                where: {
                    idkategori: req.params.id
                } 
            });
            res.json(req.file);
        } catch (err) {
            console.log(err);
        }

    }else{
        const newKategori = {
            namakategori: req.body.namakategori,
            imagekategori : req.body.imagekategori
            }
        try {
            await Kategori.update(newKategori, {
                where: {
                    idkategori: req.params.id
                }
            });
            res.json({
                "message": "Kategori Updated"
            });
        } catch (err) {
            console.log(err);
        }

    }
}
 
 const updateKategori = async (req, res) => {
    try {
        await Kategori.update(req.body, {
            where: {
                idkategori: req.params.id
            }
        });
        res.json({
            "message": "Kategori Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete Kategori berdasarkan id
 const deleteKategori = async (req, res) => {
    try {
        await Kategori.destroy({
            where: {
                idkategori: req.params.id
            }
        });
        res.json({
            "message":"Hapus Berhasil"
        });
    } catch (err) {
        console.log(err);
    } 
}


module.exports = {
    getKategori,
   getKategoriById,
   createKategori,
   updateKategori,
   deleteKategori,
   updateKategoriImg
    
}