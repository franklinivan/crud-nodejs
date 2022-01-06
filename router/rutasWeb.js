const express = require('express');
const router = express.Router();

// Rutas del sitio web. Renderiza la view.
router.get('/',(_,res)=>{
    res.render('index');
});
router.get('/servicios',(_,res)=>{
    res.render('servicios');
});
router.get('/nosotros',(_,res)=>{
    res.render("nosotros");
});

module.exports = router;