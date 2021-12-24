const express = require('express');
const mongoose = require('mongoose');
// express() es para utilizar todo lo que estamos requiriendo.
const app = express();
const port = process.env.PORT || 4000;
// variables de entorno
require('dotenv').config();

// conexión a la BD utilizando mongoose.
uri = `mongodb+srv://pets-petite:${process.env.PASSWORD}@cluster0.stxmk.mongodb.net/${process.env.DBNAME}`;

mongoose.connect(uri)
    .then(()=>console.log("Base de datos conectada"))
    .catch(e =>console.log(e));

// motor de plantilla
app.set("view engine","ejs");
app.set("views", __dirname + "/views");
// carpeta estática
app.use(express.static(__dirname + "/public"));


// Rutas web
app.use('/', require('./router/rutasWeb'));

// Rutas admin
app.use('/', require('./router/rutasAdmin'));


// middleware
app.use((req,res,next)=>{
    res.status(404).render("404");
});

// definicion del puerto.
app.listen(port,()=>{
    console.log("escuchando en el puerto", port);
});