const express = require('express');
const router = express.Router();
const logsController = require('../controllers/logsController.js');

router.post('/info', logsController.info);
router.post('/warn', logsController.warn);
router.post('/error', logsController.error);

module.exports = router;
