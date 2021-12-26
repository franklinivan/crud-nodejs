const express = require('express');
const router = express.Router();
const Mascota = require("../models/Mascota"); //llamar al modelo.

// ----------- Rutas del Administrador de mascotas -----------
router.get('/mascotas', async (req,res)=>{

    try {
        const arrayMascotas = await Mascota.find();

        res.render('mascotas',{
            arrayMascotas
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/mascotas', async (req,res)=>{
    const body = req.body; // req.body es la info que me llega del formulario.
    try {
        // -- esta es una forma de guardar un doc.
        // const nuevaMascota = new Mascota(body);
        // await nuevaMascota.save();

        await Mascota.create(body);

        res.redirect('mascotas');
    } catch (error) {
        console.log(error);
    }
});

router.get('/mascotas/:name', async(req,res)=>{
    const name = req.params.name; //req.params.name es para obtener el name (puede ser el id o lo que sea) que viene en la url.
    try {
        const mascota = await Mascota.findOne({name: name});
        console.log(mascota);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;