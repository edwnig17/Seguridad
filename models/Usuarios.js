const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({

  nombre: String,
  email: String,
 
  rol: { type: String, default: 'usuario' }, 
});

const Usuario = mongoose.model('usuarios', usuarioSchema);

module.exports = Usuario;
