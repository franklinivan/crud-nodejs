const mongoose = require('mongoose');
const { Schema } = mongoose;

const mascotaSchema = new Schema({
    name: String,
    race: String
});

// creación del modelo.
const Mascota = mongoose.model('Mascota',mascotaSchema);
// exportar el modelo.
module.exports = Mascota;