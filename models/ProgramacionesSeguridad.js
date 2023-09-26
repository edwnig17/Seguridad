const mongoose = require('mongoose');

const programacionSeguridadSchema = new mongoose.Schema({
  nombreEvento: String,
  horaProgramada: String,
  descripcion: String,
});

const ProgramacionSeguridad = mongoose.model('programacionesSeguridad', programacionSeguridadSchema , 'programacionesSeguridad');

module.exports = ProgramacionSeguridad;

