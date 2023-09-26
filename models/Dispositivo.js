const mongoose = require('mongoose');

const dispositivoSchema = new mongoose.Schema({
  nombre: String,
  tipo: String,
  ubicacion: String,
  estado: String, 
});

const Dispositivo = mongoose.model('dispositivos', dispositivoSchema);

module.exports = Dispositivo;
