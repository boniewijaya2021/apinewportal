const Banner = require('../models/banner');


 const getBanner = async (req, res) => {
    try {
        const banner = await Banner.findAll();
        res.send(banner);
    } catch (err) {
        console.log(err);
    }
}
 
 const getBannerById = async (req, res) => {
    try {
        const banner = await Banner.findAll({
            where: {
                idBanner: req.params.id
            }
        });
        res.send(banner[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create Banner baru

 const createBanner = async (req, res) => {
    if(req.file) {
        
        var namaImage = req.file.filename;

        const newBanner = {
        namabanner: req.body.namabanner,
        imagebanner : namaImage,
        idkategori: req.body.idkategori,
        
        }
       console.log(newBanner.imagebanner);
        
        try {
            await Banner.create(newBanner);
            res.json(req.file);
            //res.json(req.file);
        } catch (err) {
            console.log(err);
        }

    }
}
 
// Update Banner berdasarkan id
 const updateBanner = async (req, res) => {
    try {
        await Banner.update(req.body, {
            where: {
                idbanner: req.params.id
            }
        });
        res.json({
            "message": "Banner Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete Banner berdasarkan id
 const deleteBanner = async (req, res) => {
    try {
        await Banner.destroy({
            where: {
                idbanner: req.params.id
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
    getBanner,
   getBannerById,
   createBanner,
   updateBanner,
   deleteBanner
    
}