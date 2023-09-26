const RegistroAcceso = require('../models/RegistroAccesos.js');

// Controlador para crear un nuevo registro de acceso
const crearRegistroAcceso = async (req, res) => {
  try {
    const nuevoRegistro = new RegistroAcceso(req.body);
    const registroGuardado = await nuevoRegistro.save();
    res.status(201).json(registroGuardado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para obtener todos los registros de acceso
const obtenerRegistrosAcceso = async (req, res) => {
  try {
    const registros = await RegistroAcceso.find();
    res.json(registros);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para obtener un registro de acceso por ID
const obtenerRegistroAccesoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const registro = await RegistroAcceso.findById(id);
    if (!registro) {
      return res.status(404).json({ error: 'Registro de acceso no encontrado' });
    }
    res.json(registro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para actualizar un registro de acceso por ID
const actualizarRegistroAcceso = async (req, res) => {
  const { id } = req.params;
  try {
    const registroActualizado = await RegistroAcceso.findByIdAndUpdate(id, req.body, { new: true });
    if (!registroActualizado) {
      return res.status(404).json({ error: 'Registro de acceso no encontrado' });
    }
    res.json(registroActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para eliminar un registro de acceso por ID
const eliminarRegistroAcceso = async (req, res) => {
  const { id } = req.params;
  try {
    const registroEliminado = await RegistroAcceso.findByIdAndRemove(id);
    if (!registroEliminado) {
      return res.status(404).json({ error: 'Registro de acceso no encontrado' });
    }
    res.json({ message: 'Registro de acceso eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = {
  crearRegistroAcceso,
  obtenerRegistrosAcceso,
  obtenerRegistroAccesoPorId,
  actualizarRegistroAcceso,
  eliminarRegistroAcceso,
};
