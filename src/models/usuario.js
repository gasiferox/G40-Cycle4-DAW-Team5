const mongoose = require('mongoose')

let UsuarioSchema = new mongoose.Schema({
    idUsuario: Number,
    nombreUsuario: String,
    apellidoUsuario: String,
    documentoUsuario: String,
    telefonoUsuario: String,
    emailUsuario: String
})

module.exports = mongoose.model('usuario', UsuarioSchema, 'usuarios')