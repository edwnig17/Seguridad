const mongoose = require('mongoose');

const eventoAccesoSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  dispositivoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dispositivo' },
  tipo: String,
  marca_de_tiempo: Date,
  detalles: String,
});

const EventoAcceso = mongoose.model('eventos_acceso', eventoAccesoSchema , 'eventos_acceso');

module.exports = EventoAcceso;
