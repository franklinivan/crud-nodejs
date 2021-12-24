const express = require('express');
const router = express.Router();

// Rutas del sitio web. Renderiza la view.
router.get("/",(req,res)=>{
    res.render("index",{somevalue : "locofefo"});
});
router.get("/services",(req,res)=>{
    res.render("services");
});

module.exports = router;