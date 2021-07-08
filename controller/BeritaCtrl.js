const Berita = require('../models/berita');
const { Op } = require("sequelize");
const sequelize = require("sequelize");
//const cors = require('cors')



const getBerita = async (req, res) => {
    try {
        const berita = await Berita.findAll({
            limit:20,
            order:[
                ['idberita', 'DESC']
            ],
        });
        res.send(berita);
    } catch (err) {
        console.log(err);
    }
}
 
 const getBeritaById = async (req, res) => {
    try {
        const berita = await Berita.findAll({
            where: {
                idberita: req.params.id
            }
        });
        res.send(berita[0]);
    } catch (err) {
        console.log(err);
    }
}



// Create Berita baru
 const createBerita = async (req, res) => {
    try {
        await Berita.create(req.body);
        res.json({
            "message": "Berita Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update Berita berdasarkan id
 const updateBerita = async (req, res) => {
    try {
        await Berita.update(req.body, {
            where: {
                idberita: req.params.id
            }
        });
        res.json({
            "message": "Berita Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete Berita berdasarkan id
 const deleteBerita = async (req, res) => {
    try {
        await Berita.destroy({
            where: {
                idberita: req.params.id
            }
        });
       
        res.json({
            "message":"Hapus Berhasil"
        });
    } catch (err) {
        console.log(err);
    }
}

const getBeritaByCat = async (req, res) => {
    let idkat = req.params.id;
    try {
        const berita = await Berita.findAll({
            where: {
                idkategori: {
                  [Op.eq]: idkat
                }
              },
            limit:3,
        });
        res.send(berita);
        //console.log(berita);
    } catch (err) {
        console.log(err);
    }
}
/*
({ order: Sequelize.literal('rand()'), limit: 5 }).then((encounters) => {
        // single random encounter
    }); 
*/
const getPopuler = async (req, res) => {
    try {
        const berita = await Berita.findAll({
            limit:3,
            order: sequelize.fn('RAND'),
        });
        res.send(berita);
    } catch (err) {
        console.log(err);
    }
}
const createUpload = async(req,res)=>{
    if(req.file) {
        
        var namaImage = req.file.filename;

        const newBerita = {
        title: req.body.title,
        content:  req.body.content,
        idkategori: req.body.idkategori,
        iduser: req.body.iduser,
        img : namaImage
        }
        console.log(req.body);
        
        try {
            await Berita.create(newBerita);
            res.json(req.file);
            //res.json(req.file);
        } catch (err) {
            console.log(err);
        }

    }

}



module.exports = {
    getBerita,
    getBeritaById,
    createBerita,
    updateBerita,
    deleteBerita,
    getBeritaByCat,
    createUpload,
    getPopuler

    
}