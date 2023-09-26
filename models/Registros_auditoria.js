const mongoose = require('mongoose');

const registroAuditoriaSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  accion: String,
  marca_de_tiempo: Date,
  detalles: String,
});

const RegistroAuditoria = mongoose.model('registros_auditoria', registroAuditoriaSchema , 'registros_auditoria');

module.exports = RegistroAuditoria;
