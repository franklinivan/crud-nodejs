const express = require('express');
// const {connection} = require('mongoose');
const router = express.Router();
const Mascota = require("../models/Mascota"); //llamar al modelo.

// ----------- Rutas del Administrador de mascotas -----------
router.get("/mascotas", async (req,res)=>{

    try {
        const arrayMascotas = await Mascota.find();
        // esto no se si está bien, pero es para cerrar la bd en teoría.
        // connection.close()
        //     .then(()=>console.log("conexión cerrada"))
        //     .catch(err =>console.log(err.name));

        res.render("mascotas",{
            arrayMascotas
        });
    } catch (error) {
        console.log(error);
    }
});

router.get("/mascotas/crear", (req,res)=>{
   try {
       
   } catch (error) {
       console.log(error);
   } 
});

module.exports = router;