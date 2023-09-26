const Notificacion = require('../models/Notificaciones.js');

//Controlador para crear una nueva notifi 

const crearNotificacion = async (req, res) => {
 try {
        const notificacion = new Notificacion(req.body);
        await notificacion.save();
        res.status(201).json(notificacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//Controlador para obtener todas las notificaciones

const obtenerNotificaciones = async (req, res) => {
    try {
        const notificaciones = await Notificacion.find();
        res.status(200).json(notificaciones);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//Controlador para obtener una notificacion por ID

const obtenerNotificacionPorID = async (req, res) => {
    try {
      const notificacion = await Notificacion.findById(req.params.id);
      if (!notificacion) {
        return res.status(404).json({ error: 'Notificación no encontrada' });
      }
      res.json(notificacion);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  };

  //Controlador para actualizar una notificacion

  const actualizarNotificacion = async (req , res) =>{
    try {
      const notificacion = await Notificacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!notificacion) {
        return res.status(404).json({ error: 'Notificación no encontrada' });
      }
      res.json(notificacion);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  }

//controlador para eliminar notificacion por ID

const eliminarNotificacion = async (req, res) => {
    try {
      const notificacion = await Notificacion.findByIdAndDelete(req.params.id);
      if (!notificacion) {
        return res.status(404).json({ error: 'Notificación no encontrada' });
      }
      res.json(notificacion);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  }

  module.exports = {
    crearNotificacion,
    obtenerNotificaciones,
    obtenerNotificacionPorID,
    actualizarNotificacion,
    eliminarNotificacion    
  }