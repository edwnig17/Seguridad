const winston = require('winston');

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({ filename: 'logs.log' }),
];

// Crea un objeto logger con la configuración
const logger = winston.createLogger({
  level: 'info', // Nivel de registro (puedes cambiarlo según tus necesidades)
  format: winston.format.json(),
  transports,
});

module.exports = logger;
