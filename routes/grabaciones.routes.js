const express = require('express');
const router = express.Router();
const grabacionesController = require('../controllers/grabacionesController.js');

router.post('/', grabacionesController.crearGrabacion);
router.get('/', grabacionesController.obtenerGrabaciones);
router.get('/:id', grabacionesController.obtenerGrabacionPorID);
router.put('/:id', grabacionesController.actualizarGrabacion);
router.delete('/:id', grabacionesController.eliminarGrabacion);

module.exports = router;
