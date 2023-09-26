const Dispositivo = require('../models/Dispositivo.js');

// Obtener todos los dispositivos
const getAll = async (req, res) => {
  try {
    const dispositivos = await Dispositivo.find();
    res.json(dispositivos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener dispositivos' });
  }
};

// Obtener un dispositivo por ID
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const dispositivo = await Dispositivo.findById(id);
    if (!dispositivo) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }
    res.json(dispositivo);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el dispositivo' });
  }
};

// Crear un nuevo dispositivo
const create = async (req, res) => {
  const { nombre, tipo, ubicacion, estado } = req.body;
  const dispositivo = new Dispositivo({ nombre, tipo, ubicacion, estado });
  try {
    const nuevoDispositivo = await dispositivo.save();
    res.status(201).json(nuevoDispositivo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el dispositivo' });
  }
};

// Actualizar un dispositivo por ID
const update = async (req, res) => {
  const { id } = req.params;
  const { nombre, tipo, ubicacion, estado } = req.body;
  try {
    const dispositivo = await Dispositivo.findByIdAndUpdate(
      id,
      { nombre, tipo, ubicacion, estado },
      { new: true }
    );
    if (!dispositivo) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }
    res.json(dispositivo);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el dispositivo' });
  }
};

// Eliminar un dispositivo por ID
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const dispositivo = await Dispositivo.findByIdAndRemove(id);
    if (!dispositivo) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }
    res.json({ mensaje: 'Dispositivo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el dispositivo' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
