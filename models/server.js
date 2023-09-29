const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const conectarDB = require('../config/config');
const setupChangeStreams = require('./changeStreams.js');
const logsRouter = require('../routes/logs.routes.js');
const dispositivosRouter = require('../routes/dispositivos.routes.js');
const eventosAccesoRouter = require('../routes/eventosAcce.routes.js');
const eventsSeguAccesoRouter = require('../routes/eventos.routes.js');
const GrabacionRouter = require('../routes/grabaciones.routes');
const informeRouter = require('../routes/informes.routes.js');
const notificacionesRouter = require('../routes/notificaciones.routes.js');
const programacionesRouter = require('../routes/programaciones.routes.js');
const registroRouter = require('../routes/registroAcceso.routes.js');
const registroAudiRouter = require('../routes/registroAuditoria.routes.js');
const zonasSeguridadRouter = require('../routes/zonasSeguridad.routes.js');
const morgan = require('morgan');
const winston = require('winston');
const fs = require('fs');

dotenv.config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.setupLogging();

    conectarDB();
    setupChangeStreams();
    this.routes();
  }

  setupLogging() {
    const logDir = 'logs';

    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }

    const logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [
        new winston.transports.File({ filename: `${logDir}/combined.log` }),
      ],
    });

    this.logger = logger;

    // Configura morgan después de winston
    this.app.use(morgan('combined', { stream: logger.stream }));

    process.on('unhandledRejection', (ex) => {
      throw ex;
    });

    process.on('uncaughtException', (ex) => {
      logger.error(ex.message, ex);
      process.exit(1);
    });
  }

  routes() {
    this.app.use('/api/dispositivos', dispositivosRouter);
    this.app.use('/api/eventosAcceso', eventosAccesoRouter);
    this.app.use('/api/eventosSeguAcceso', eventsSeguAccesoRouter);
    this.app.use('/api/grabaciones', GrabacionRouter);
    this.app.use('/api/informes', informeRouter);
    this.app.use('/api/notificaciones', notificacionesRouter);
    this.app.use('/api/programaciones', programacionesRouter);
    this.app.use('/api/registroAcceso', registroRouter);
    this.app.use('/api/registroAudi', registroAudiRouter);
    this.app.use('/api/zonasSeguridad', zonasSeguridadRouter);
    this.app.use('/logs', logsRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor Express en ejecución en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
