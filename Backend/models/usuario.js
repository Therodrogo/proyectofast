const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    rut: String,
    correo: {type:String,unique:true},
    contrasena:String,
    tipo:String, //tipo de usuario  

},{ versionKey: false }
);

const usuario = mongoose.model('usuario', usuarioSchema);
module.exports = usuario;