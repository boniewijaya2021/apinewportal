const Logo = require('../models/logo');

 const getLogo = async (req, res) => {
    try {
        const logo = await Logo.findAll({
            limit:1,
            order:[
                ['idlogo', 'DESC']
            ],
            });
        res.send(logo[0]);
    } catch (err) {
        console.log(err);
    }
}
// Create Logo baru
 const createLogo = async (req, res) => {
    if(req.file) {
        
        var namaImage = req.file.filename;

        const newLogo = {
        imagelogo : namaImage
        }
        try {
            await Logo.create(newLogo);
            res.json(req.file);
            //res.json(req.file);
        } catch (err) {
            console.log(err);
        }

    }
}
 
// Update Logo berdasarkan id
const updateLogo = async (req, res) => {
    if(req.file) {
        
        var namaImage = req.file.filename;

        const newLogo = {
        imagelogo : namaImage
        }
        try {
            await Logo.update(newLogo,{
                where: {
                    idlogo: req.params.id
                } 
            });
            res.json(req.file);
        } catch (err) {
            console.log(err);
        }

    }
}
 
const deleteLogo = async (req, res) => {
    try {
        await Logo.destroy({
            where: {
                idlogo: req.params.id
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
    getLogo,
    createLogo,
    updateLogo,
    deleteLogo
    
}