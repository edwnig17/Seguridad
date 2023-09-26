const mongoose = require('mongoose');

const registroAccesoSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  dispositivoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dispositivo' },
  fechaHora: Date,
  tipoAcceso: String,
  descripcion: String,
});

const RegistroAcceso = mongoose.model('registrosAcceso', registroAccesoSchema, 'registrosAcceso');

module.exports = RegistroAcceso;
