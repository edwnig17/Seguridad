const express = require('express');
const router = express.Router();
const logsController = require('../controllers/logsController.js');

router.get('/info', logsController.info);
router.get('/warn', logsController.warn);
router.get('/error', logsController.error);

module.exports = router;
