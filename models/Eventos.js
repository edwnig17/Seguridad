const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
  nombre: String,
  tipo: String,
  descripcion: String,
  fechaHora: Date,
});

const Evento = mongoose.model('eventos', eventoSchema , 'eventos');

module.exports = Evento;
