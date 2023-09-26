const ProgramacionSeguridad = require('../models/ProgramacionesSeguridad.js');

// Controlador para crear una nueva programación de seguridad
const crearProgramacionSeguridad = async (req, res) => {
  try {
    const nuevaProgramacion = new ProgramacionSeguridad(req.body);
    const programacionGuardada = await nuevaProgramacion.save();
    res.status(201).json(programacionGuardada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para obtener todas las programaciones de seguridad
const obtenerProgramacionesSeguridad = async (req, res) => {
  try {
    const programaciones = await ProgramacionSeguridad.find();
    res.json(programaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para obtener una programación de seguridad por ID
const obtenerProgramacionSeguridadPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const programacion = await ProgramacionSeguridad.findById(id);
    if (!programacion) {
      return res.status(404).json({ error: 'Programación de seguridad no encontrada' });
    }
    res.json(programacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para actualizar una programación de seguridad por ID
const actualizarProgramacionSeguridad = async (req, res) => {
  const { id } = req.params;
  try {
    const programacionActualizada = await ProgramacionSeguridad.findByIdAndUpdate(id, req.body, { new: true });
    if (!programacionActualizada) {
      return res.status(404).json({ error: 'Programación de seguridad no encontrada' });
    }
    res.json(programacionActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para eliminar una programación de seguridad por ID
const eliminarProgramacionSeguridad = async (req, res) => {
  const { id } = req.params;
  try {
    const programacionEliminada = await ProgramacionSeguridad.findByIdAndRemove(id);
    if (!programacionEliminada) {
      return res.status(404).json({ error: 'Programación de seguridad no encontrada' });
    }
    res.json({ message: 'Programación de seguridad eliminada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = {
  crearProgramacionSeguridad,
  obtenerProgramacionesSeguridad,
  obtenerProgramacionSeguridadPorId,
  actualizarProgramacionSeguridad,
  eliminarProgramacionSeguridad,
};
