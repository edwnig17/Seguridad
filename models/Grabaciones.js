const mongoose = require('mongoose');

const grabacionSchema = new mongoose.Schema({
  nombre: String,
  tipo: String,
  descripcion: String,
  fechaHora: Date,
});

const Grabacion = mongoose.model('grabaciones', grabacionSchema);

module.exports = Grabacion;
