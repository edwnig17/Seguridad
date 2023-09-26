const EventoAcceso = require('../models/Eventos_acceso.js');

// Obtener todos los eventos de acceso
const getAll = async (req, res) => {
  try {
    const eventos = await EventoAcceso.find();
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener eventos de acceso' });
  }
};

// Obtener un evento de acceso por ID
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const evento = await EventoAcceso.findById(id);
    if (!evento) {
      return res.status(404).json({ error: 'Evento de acceso no encontrado' });
    }
    res.json(evento);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el evento de acceso' });
  }
};

// Crear un nuevo evento de acceso
const create = async (req, res) => {
  const { usuarioId, dispositivoId, tipo, marca_de_tiempo, detalles } = req.body;
  const evento = new EventoAcceso({ usuarioId, dispositivoId, tipo, marca_de_tiempo, detalles });
  try {
    const nuevoEvento = await evento.save();
    res.status(201).json(nuevoEvento);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el evento de acceso' });
  }
};

// Actualizar un evento de acceso por ID
const update = async (req, res) => {
  const { id } = req.params;
  const { usuarioId, dispositivoId, tipo, marca_de_tiempo, detalles } = req.body;
  try {
    const evento = await EventoAcceso.findByIdAndUpdate(
      id,
      { usuarioId, dispositivoId, tipo, marca_de_tiempo, detalles },
      { new: true }
    );
    if (!evento) {
      return res.status(404).json({ error: 'Evento de acceso no encontrado' });
    }
    res.json(evento);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el evento de acceso' });
  }
};

// Eliminar un evento de acceso por ID
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const evento = await EventoAcceso.findByIdAndRemove(id);
    if (!evento) {
      return res.status(404).json({ error: 'Evento de acceso no encontrado' });
    }
    res.json({ mensaje: 'Evento de acceso eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el evento de acceso' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
