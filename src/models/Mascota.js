const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const mascotaSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    race: String,
    sex: String,
    age: String
});

// creación del modelo.
const Mascota = model('Mascota',mascotaSchema);
// exportar el modelo.
module.exports = Mascota;