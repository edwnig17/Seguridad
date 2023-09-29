const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

const logsController = {
  info: (req, res) => {
    const { message } = req.body; 
    if (message) {
      logger.info(message); 
      res.status(200).json({ message: 'Mensaje de información registrado.' });
    } else {
      res.status(400).json({ error: 'Mensaje no proporcionado.' });
    }
  },
  warn: (req, res) => {
    const { message } = req.body;
    if (message) {
      logger.warn(message);
      res.status(200).json({ message: 'Mensaje de advertencia registrado.' });
    } else {
      res.status(400).json({ error: 'Mensaje no proporcionado.' });
    }
  },
  error: (req, res) => {
    const { message } = req.body;
    if (message) {
      logger.error(message);
      res.status(200).json({ message: 'Mensaje de error registrado.' });
    } else {
      res.status(400).json({ error: 'Mensaje no proporcionado.' });
    }
  },
};

module.exports = logsController;
