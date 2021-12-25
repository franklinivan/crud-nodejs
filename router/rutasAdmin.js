const express = require('express');
// const {connection} = require('mongoose');
const router = express.Router();
const Mascota = require("../models/Mascota"); //llamar al modelo.

// ----------- Rutas del Administrador de mascotas -----------
router.get('/mascotas', async (req,res)=>{

    try {
        const arrayMascotas = await Mascota.find();
        // esto no se si está bien, pero es para cerrar la bd en teoría.
        // connection.close()
        //     .then(()=>console.log("conexión cerrada"))
        //     .catch(err =>console.log(err.name));

        res.render('mascotas',{
            arrayMascotas
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/mascotas', async (req,res)=>{
    // req.body es la info que me llega del formulario.
    const body = req.body;
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


module.exports = router;