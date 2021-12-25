require('dotenv').config(); // variables de entorno.
require ("./database/mongo"); // conexión la bd.
const express = require('express');
const app = express(); // express() es para utilizar todo lo que estamos requiriendo.
const port = process.env.PORT;

//Para interpretar los datos que vienen de un formulario y poder procesarlo
app.use(express.urlencoded({extended: false}));

// motor de plantilla
app.set("view engine","ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public")); // carpeta estática.


// Rutas web
app.use('/', require('./router/rutasWeb'));

// Rutas admin
app.use('/', require('./router/rutasAdmin'));


// middleware
app.use((req,res,next)=>{
    res.status(404).render("404");
});

// definición del puerto.
app.listen(port,()=>console.log("escuchando en el puerto", port));