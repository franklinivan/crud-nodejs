//Script para insertar rápido a la bd.

require('dotenv').config(); // variables de entorno.
require ('./database/mongo'); // conexión la bd.
const Mascota = require("./models/Mascota"); //llamar al modelo.

const mascota1 = new Mascota ({
    name: 'prueba1',
    race: 'prueba1',
    age: 'cachorro',
    sex: 'macho'
})
const mascota2 = new Mascota ({
    name: 'prueba2',
    race: 'prueba1',
    age: 'cachorro',
    sex: 'macho'
})

// -----------------

mascota1.save()
    .then(res =>{
        console.log(res);
    })
    .catch(err =>{
        console.log(err);
    })

mascota2.save()
    .then(res =>{
        console.log(res);
    })
    .catch(err =>{
        console.log(err);
    })