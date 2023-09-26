const EventoSeguridad = require('../models/Eventos.js');

// Controlador para crear un nuevo evento de seguridad
const crearEventoSeguridad = async (req, res) => {
  try {
    const nuevoEvento = new EventoSeguridad(req.body);
    const eventoGuardado = await nuevoEvento.save();
    res.status(201).json(eventoGuardado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para obtener todos los eventos de seguridad
const obtenerEventosSeguridad = async (req, res) => {
  try {
    const eventos = await EventoSeguridad.find();
    res.json(eventos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para obtener un evento de seguridad por ID
const obtenerEventoSeguridadPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const evento = await EventoSeguridad.findById(id);
    if (!evento) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }
    res.json(evento);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para actualizar un evento de seguridad por ID
const actualizarEventoSeguridad = async (req, res) => {
  const { id } = req.params;
  const { nombre, tipo, descripcion, fechaHora } = req.body;
  try {
    const eventoActualizado = await EventoSeguridad.findByIdAndUpdate(
      id,
      { nombre, tipo, descripcion, fechaHora },
      { new: true }
    );
    if (!eventoActualizado) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }
    res.json(eventoActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para eliminar un evento de seguridad por ID
const eliminarEventoSeguridad = async (req, res) => {
  const { id } = req.params;
  try {
    const eventoEliminado = await EventoSeguridad.findByIdAndDelete(id);
    if (!eventoEliminado) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }
    res.json({ mensaje: 'Evento eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = {
  crearEventoSeguridad,
  obtenerEventosSeguridad,
  obtenerEventoSeguridadPorId,
  actualizarEventoSeguridad,
  eliminarEventoSeguridad,
};
