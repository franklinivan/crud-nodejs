const express = require('express');
const router = express.Router();
//llamar al modelo.
const Mascota = require("../models/mascota");

// Rutas del Administrador de mascotas. Renderiza la view.
router.get("/mascotas", async (req,res)=>{

    try {
        const arrayMascotas = await Mascota.find()
        console.log(arrayMascotas);
        console.log('------------');

        res.render("mascotas",{
            arrayMascotas
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;