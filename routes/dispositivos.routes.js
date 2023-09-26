const express = require('express');
const router = express.Router();
const dispositivosController = require('../controllers/dispositivoController.js');

router.get('/', dispositivosController.getAll);

router.get('/:id', dispositivosController.getById);

router.post('/', dispositivosController.create);

router.put('/:id', dispositivosController.update);


router.delete('/:id', dispositivosController.remove);
    
module.exports = router;

