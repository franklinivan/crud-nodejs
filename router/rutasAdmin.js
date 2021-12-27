const express = require('express');
const router = express.Router();
const Mascota = require("../models/Mascota"); //llamar al modelo.

// ----------- Rutas del Administrador de mascotas -----------
// leer las mascotas
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
    const id = req.params.id // el params creo que viene por el url.
    const body = req.body; // info que viene en JSON debido a utilizar el PUT.

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
// eliminar una mascota
router.delete('/:id', async (req,res)=>{
    const id = req.params.id;
    console.log(id);

    try {
        const mascotaEliminada = await Mascota.findByIdAndDelete(id);
        console.log(mascotaEliminada);

        res.json({
            status: true,
            message: 'Eliminado'
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: false,
            message: 'error'
        });
    }
   
});

module.exports = router;