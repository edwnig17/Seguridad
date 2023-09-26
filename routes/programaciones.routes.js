const express = require('express');
const router = express.Router();
const programacionesSeguridadController = require('../controllers/programacionesController.js');

router.post('/', programacionesSeguridadController.crearProgramacionSeguridad);
router.get('/', programacionesSeguridadController.obtenerProgramacionesSeguridad);
router.get('/:id', programacionesSeguridadController.obtenerProgramacionSeguridadPorId);
router.put('/:id', programacionesSeguridadController.actualizarProgramacionSeguridad);
router.delete('/:id', programacionesSeguridadController.eliminarProgramacionSeguridad);

module.exports = router;
