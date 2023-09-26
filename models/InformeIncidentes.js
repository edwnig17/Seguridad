const mongoose = require('mongoose');

const informeIncidenteSchema = new mongoose.Schema({
  fecha: Date,
  tipo: String,
  descripcion: String,
  fotoAdjunta: String,
  resuelto: Boolean,
});

const InformeIncidente = mongoose.model('informesIncidentes', informeIncidenteSchema, 'informesIncidentes');

module.exports = InformeIncidente;
