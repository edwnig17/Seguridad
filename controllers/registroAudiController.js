const RegistroAuditoria = require('../models/Registros_auditoria.js');

// Controlador para crear un nuevo registro de auditoria
const crearRegistroAuditoria = async (req, res) => {
  try {
    const nuevoRegistro = new RegistroAuditoria(req.body);
    const registroGuardado = await nuevoRegistro.save();
    res.status(201).json(registroGuardado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para obtener todos los registros de auditoria
const obtenerRegistrosAuditoria = async (req, res) => {
  try {
    const registros = await RegistroAuditoria.find();
    res.json(registros);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para obtener un registro de auditoria por ID
const obtenerRegistroAuditoriaPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const registro = await RegistroAuditoria.findById(id);
    if (!registro) {
      return res.status(404).json({ error: 'Registro de auditoria no encontrado' });
    }
    res.json(registro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para actualizar un registro de auditoria por ID
const actualizarRegistroAuditoria = async (req, res) => {
  const { id } = req.params;
  try {
    const registroActualizado = await RegistroAuditoria.findByIdAndUpdate(id, req.body, { new: true });
    if (!registroActualizado) {
      return res.status(404).json({ error: 'Registro de auditoria no encontrado' });
    }
    res.json(registroActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para eliminar un registro de auditoria por ID
const eliminarRegistroAuditoria = async (req, res) => {
  const { id } = req.params;
  try {
    const registroEliminado = await RegistroAuditoria.findByIdAndRemove(id);
    if (!registroEliminado) {
      return res.status(404).json({ error: 'Registro de auditoria no encontrado' });
    }
    res.json({ message: 'Registro de auditoria eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = {
  crearRegistroAuditoria,
  obtenerRegistrosAuditoria,
  obtenerRegistroAuditoriaPorId,
  actualizarRegistroAuditoria,
  eliminarRegistroAuditoria,
};
