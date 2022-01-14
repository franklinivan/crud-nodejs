const { Schema, model } = require('mongoose');

const mascotaSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    race: String,
    sex: String,
    age: String
});

// exportar el modelo.
module.exports =  model('Mascota',mascotaSchema);