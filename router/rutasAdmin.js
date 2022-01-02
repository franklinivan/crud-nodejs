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

        req.flash('successMascota','Mascota registradas con éxito.'); // envio el mensaje por flash.
        res.redirect('mascotas');

    } catch (error) {
        console.log(error);
        if (error.code == 11000){ // error.code 11000 es unique en schema.
            req.flash('errorMascota','Ya existe una mascota con ese nombre.'); // envio el mensaje por flash.
            res.redirect('mascotas');
        }
    }
});
// editar una mascota
router.put('/:id', async (req,res)=>{
    const id = req.params.id // el params viene por el url.
    const body = req.body; // info que viene en JSON debido a utilizar el PUT.

    try {
        const mascotaEditar = await Mascota.findByIdAndUpdate(id,body, {new: true}); 
        // el {new: true} es para que al terminar la operación devuelva el valor actualizado y no el que encontró con el findbyid.
        console.log(mascotaEditar);

        req.flash('successMascota','Mascota editada con éxito.'); // envio el mensaje por flash.

        res.json({ // respuesta en JSON.
            status: true,
            message: 'Editado'
        });
    } catch (error) {
        console.log(error);

        // valido que el error y envio el mensaje por flash.
        if(error.code == 11000) req.flash('errorMascota','No se puede cambiar el nombre de una mascota a uno ya existente.');
        
        res.json({
            status: false,
            message: 'error'
        });
    }
});
// eliminar una mascota
router.delete('/:id', async (req,res)=>{
    const id = req.params.id; // el params viene por el url.

    try {
        const mascotaEliminada = await Mascota.findByIdAndDelete(id);
        console.log(mascotaEliminada);

        // envio el mensaje por flash.
        req.flash('successMascota','Mascota eliminada con éxito.');

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