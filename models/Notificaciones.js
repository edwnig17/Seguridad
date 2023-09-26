const mongoose = require('mongoose');

const notificacionSchema = new mongoose.Schema({
  mensaje: String,
  tipo: String,
  dispositivoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dispositivo' },
  marca_de_tiempo: Date,
});

const Notificacion = mongoose.model('notificaciones', notificacionSchema);

module.exports = Notificacion;
