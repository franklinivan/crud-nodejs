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
// editar una mascota
router.put('/:id', async (req,res)=>{
    const body = req.body; // info que viene en JSON debido a utilizar el PUT.
    const id = body.id;

    try {
        const mascotaEditar = await Mascota.findByIdAndUpdate(id,body);
        // console.log(mascotaEditar);

        res.json({ // respuesta en JSON.
            status: 'true',
            message: 'Editado'
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'false',
            message: 'error'
        });
    }
});


module.exports = router;