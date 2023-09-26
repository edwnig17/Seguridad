const express = require('express');
const router = express.Router();
const informesIncidentesController = require('../controllers/informesIncidentesController.js');

router.post('/', informesIncidentesController.crearInformeIncidente);
router.get('/', informesIncidentesController.obtenerInformesIncidentes);
router.get('/:id', informesIncidentesController.obtenerInformeIncidentePorID);
router.put('/:id', informesIncidentesController.actualizarInformeIncidente);
router.delete('/:id', informesIncidentesController.eliminarInformeIncidente);

module.exports = router;
