const express = require('express');
const router = express.Router();
const registrosAccesoController = require('../controllers/registroAccesoController.js');

router.post('/', registrosAccesoController.crearRegistroAcceso);
router.get('/', registrosAccesoController.obtenerRegistrosAcceso);
router.get('/:id', registrosAccesoController.obtenerRegistroAccesoPorId);
router.put('/:id', registrosAccesoController.actualizarRegistroAcceso);
router.delete('/:id', registrosAccesoController.eliminarRegistroAcceso);

module.exports = router;
