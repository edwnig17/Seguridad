const express = require('express');
const router = express.Router();
const notificacionesController = require('../controllers/notificacionesController.js');

router.post('/', notificacionesController.crearNotificacion);
router.get('/', notificacionesController.obtenerNotificaciones);
router.get('/:id', notificacionesController.obtenerNotificacionPorID);
router.put('/:id', notificacionesController.actualizarNotificacion);
router.delete('/:id', notificacionesController.eliminarNotificacion);

module.exports = router;
