const express = require('express');
const router = express.Router();
const registrosAuditoriaController = require('../controllers/registroAudiController.js');

router.post('/', registrosAuditoriaController.crearRegistroAuditoria);
router.get('/', registrosAuditoriaController.obtenerRegistrosAuditoria);
router.get('/:id', registrosAuditoriaController.obtenerRegistroAuditoriaPorId);
router.put('/:id', registrosAuditoriaController.actualizarRegistroAuditoria);
router.delete('/:id', registrosAuditoriaController.eliminarRegistroAuditoria);

module.exports = router;
