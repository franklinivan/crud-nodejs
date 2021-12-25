const express = require('express');
const router = express.Router();

// Rutas del sitio web. Renderiza la view.
router.get('/',(req,res)=>{
    res.render('index',{somevalue : "locofefo"});
});
router.get('/servicios',(req,res)=>{
    res.render('servicios');
});
router.get('/nosotros',(req,res)=>{
    res.render("nosotros");
});
module.exports = router;