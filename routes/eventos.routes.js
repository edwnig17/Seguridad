const express = require('express');
const router = express.Router();
const eventosController = require('../controllers/eventoSeguController.js');

router.post('/', eventosController.crearEventoSeguridad);
router.get('/', eventosController.obtenerEventosSeguridad);
router.get('/:id', eventosController.obtenerEventoSeguridadPorId);
router.put('/:id', eventosController.actualizarEventoSeguridad);
router.delete('/:id', eventosController.eliminarEventoSeguridad);

module.exports = router;
