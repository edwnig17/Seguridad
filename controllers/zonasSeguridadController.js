const ZonaSeguridad = require('../models/ZonasSeguridad.js');

// Controlador para crear una nueva zona de seguridad
const crearZonaSeguridad = async (req, res) => {
  try {
    const nuevaZona = new ZonaSeguridad(req.body);
    const zonaGuardada = await nuevaZona.save();
    res.status(201).json(zonaGuardada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para obtener todas las zonas de seguridad
const obtenerZonasSeguridad = async (req, res) => {
  try {
    const zonas = await ZonaSeguridad.find();
    res.json(zonas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para obtener una zona de seguridad por ID
const obtenerZonaSeguridadPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const zona = await ZonaSeguridad.findById(id);
    if (!zona) {
      return res.status(404).json({ error: 'Zona de seguridad no encontrada' });
    }
    res.json(zona);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para actualizar una zona de seguridad por ID
const actualizarZonaSeguridad = async (req, res) => {
  const { id } = req.params;
  try {
    const zonaActualizada = await ZonaSeguridad.findByIdAndUpdate(id, req.body, { new: true });
    if (!zonaActualizada) {
      return res.status(404).json({ error: 'Zona de seguridad no encontrada' });
    }
    res.json(zonaActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para eliminar una zona de seguridad por ID
const eliminarZonaSeguridad = async (req, res) => {
  const { id } = req.params;
  try {
    const zonaEliminada = await ZonaSeguridad.findByIdAndRemove(id);
    if (!zonaEliminada) {
      return res.status(404).json({ error: 'Zona de seguridad no encontrada' });
    }
    res.json({ message: 'Zona de seguridad eliminada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = {
  crearZonaSeguridad,
  obtenerZonasSeguridad,
  obtenerZonaSeguridadPorId,
  actualizarZonaSeguridad,
  eliminarZonaSeguridad,
};
