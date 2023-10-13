const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const votacioneSchema = new Schema({
    nombre: String,
    votos: [
        {
            votante: mongoose.Types.ObjectId,
            votado: mongoose.Types.ObjectId,
        }
    ],
    estado: Boolean,
}, { versionKey: false });

const votacione = mongoose.model('votacione', votacioneSchema);
module.exports = votacione;
