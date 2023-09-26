const express = require('express');
const router = express.Router();
const zonasSeguridadController = require('../controllers/zonasSeguridadController.js');

router.post('/', zonasSeguridadController.crearZonaSeguridad);
router.get('/', zonasSeguridadController.obtenerZonasSeguridad);
router.get('/:id', zonasSeguridadController.obtenerZonaSeguridadPorId);
router.put('/:id', zonasSeguridadController.actualizarZonaSeguridad);
router.delete('/:id', zonasSeguridadController.eliminarZonaSeguridad);

module.exports = router;
