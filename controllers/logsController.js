
const logger = require('../helpers/loggers.js');

const logsController = {
  info: (req, res) => {
    logger.info('Este es un mensaje de información.');
    res.status(200).json({ message: 'Mensaje de información registrado.' });
  },
  warn: (req, res) => {
    logger.warn('Este es un mensaje de advertencia.');
    res.status(200).json({ message: 'Mensaje de advertencia registrado.' });
  },
  error: (req, res) => {
    logger.error('Este es un mensaje de error.');
    res.status(200).json({ message: 'Mensaje de error registrado.' });
  },
};

module.exports = logsController;
