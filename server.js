const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const app = express();
const bodyParser = require('body-parser')


const Userroute = require('./routes/UserRt');
const Beritaroute = require('./routes/BeritaRt');
const Publicroute = require('./routes/PublicRt');
const Kategoriroute = require('./routes/KategoriRt');
const multerupload = require('./multerupload')
const Bannerroute =require('./routes/BannerRt')
app.use(express.json());



app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))
app.use(cors());
//app.use(express.static(__dirname + '/uploads'));
//app.use(express.static('public'))
app.use(Userroute,Beritaroute,Publicroute,Kategoriroute,multerupload,Bannerroute);
app.use('/static', express.static('public'))
//app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(3004, () => console.log('Server running at http://localhost:3004'));