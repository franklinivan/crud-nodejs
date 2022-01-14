require('dotenv').config(); // variables de entorno.
require ('./database/mongo');

const express = require('express');
const app = express(); // express() es para utilizar todo lo que estamos requiriendo.
const session = require('express-session');
const flash = require('connect-flash');
const port = process.env.PORT || 4000;


app.use(express.json()); // para leer información que viene en json desde el formulario.
app.use(express.urlencoded({extended: false})); // interpretar los datos del formulario y poder procesarlos.
// configuración necesaria para el express-session (no conozco el funcionamiento del todo).
app.use(session({
    secret: 'secret_pets',
    resave: false,
    saveUninitialized: true
}));

app.use(flash()); // flash es para enviar mensajes entre vistas (es encesario tener el express-session).
// variables globales con flash
app.use((req,_,next)=>{
    app.locals.errorMascota = req.flash('errorMascota');
    app.locals.successMascota = req.flash('successMascota');
    
    next(); // para que no se quede en este middleware.
})

// motor de plantilla
app.set('view engine','ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public')); // carpeta estática.


// Rutas web
app.use('/', require('./router/rutasWeb'));

// Rutas admin
app.use('/mascotas', require('./router/rutasAdmin'));

// 404
app.use((_,res,next)=>{
    res.status(404).render('404');
});

// definición del puerto.
app.listen(port,()=>console.log('Server on port', port));