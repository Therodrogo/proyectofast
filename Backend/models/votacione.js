const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const votacioneSchema = new Schema({
    nombre: String,
    tipo: String,
    votosM: [
        {
            votante: mongoose.Types.ObjectId,
            votadoM: mongoose.Types.ObjectId,
        }
    ],
    votosH: [
        {
            votante: mongoose.Types.ObjectId,
            votadoH: mongoose.Types.ObjectId,
        }
    ],
    estado: Boolean,
}, { versionKey: false });

const votacione = mongoose.model('votacione', votacioneSchema);
module.exports = votacione;
