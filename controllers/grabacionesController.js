const Grabacion = require('../models/Grabaciones.js');

// Controlador para crear una nueva grabación
const crearGrabacion = async (req, res) => {
  try {
    const nuevaGrabacion = new Grabacion(req.body);
    const grabacionGuardada = await nuevaGrabacion.save();
    res.status(201).json(grabacionGuardada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para obtener todas las grabaciones
const obtenerGrabaciones = async (req, res) => {
  try {
    const grabaciones = await Grabacion.find();
    res.json(grabaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para obtener una grabación por ID
const obtenerGrabacionPorID = async (req, res) => {
  const grabacionID = req.params.id;
  try {
    const grabacion = await Grabacion.findById(grabacionID);
    if (!grabacion) {
      return res.status(404).json({ error: 'Grabación no encontrada' });
    }
    res.json(grabacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para actualizar una grabación por ID
const actualizarGrabacion = async (req, res) => {
  const grabacionID = req.params.id;
  const datosActualizados = req.body;
  try {
    const grabacionActualizada = await Grabacion.findByIdAndUpdate(
      grabacionID,
      datosActualizados,
      { new: true }
    );
    if (!grabacionActualizada) {
      return res.status(404).json({ error: 'Grabación no encontrada' });
    }
    res.json(grabacionActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para eliminar una grabación por ID
const eliminarGrabacion = async (req, res) => {
  const grabacionID = req.params.id;
  try {
    const grabacionEliminada = await Grabacion.findByIdAndRemove(grabacionID);
    if (!grabacionEliminada) {
      return res.status(404).json({ error: 'Grabación no encontrada' });
    }
    res.json({ mensaje: 'Grabación eliminada con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = {
  crearGrabacion,
  obtenerGrabaciones,
  obtenerGrabacionPorID,
  actualizarGrabacion,
  eliminarGrabacion,
};
