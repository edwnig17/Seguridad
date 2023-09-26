const mongoose = require('mongoose');

const zonaSeguridadSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  dispositivosAsociados: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dispositivo' }],
});

const ZonaSeguridad = mongoose.model('zonasSeguridad', zonaSeguridadSchema, 'zonasSeguridad');

module.exports = ZonaSeguridad;
