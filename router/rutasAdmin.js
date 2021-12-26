const express = require('express');
const router = express.Router();
const Mascota = require("../models/Mascota"); //llamar al modelo.

// ----------- Rutas del Administrador de mascotas -----------
router.get('/', async (req,res)=>{

    try {
        const arrayMascotas = await Mascota.find();

        res.render('mascotas',{
            arrayMascotas
        });
    } catch (error) {
        console.log(error);
    }
});
// crear una mascota
router.post('/', async (req,res)=>{
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

router.put('/editar', async(req,res)=>{
    const body = req.body; // req.body es la info que me llega del formulario.
    const name = req.body.name;
    console.log(name);
    try {
        console.log(body);
    } catch (error) {
        console.log(error);
    }
});



module.exports = router;