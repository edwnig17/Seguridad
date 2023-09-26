const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarioController.js');
const verificarToken = require('../middleware/verificarToken.js');

router.get('/', usuariosController.getAll);
router.get('/:id', usuariosController.getById);
router.post('/', usuariosController.create);
router.put('/:id', verificarToken, usuariosController.update);
router.delete('/:id', verificarToken, usuariosController.remove);
router.get('/admin/soloAdmin', verificarToken, usuariosController.soloParaAdmin);

module.exports = router;
