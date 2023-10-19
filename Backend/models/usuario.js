const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: String,
    rut: {type:String,unique:true},
    correo: {type:String,unique:true},
    contrasena:String,
    tipo:String, //tipo de usuario  
    sexo:Boolean //true hombre false mujer

},{ versionKey: false }
);

const usuario = mongoose.model('usuario', usuarioSchema);
module.exports = usuario;