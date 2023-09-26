const InformeIncidente = require('../models/InformeIncidentes.js');

// Controlador para crear un nuevo informe de incidente
const crearInformeIncidente = async (req, res) => {
  try {
    const nuevoInforme = new InformeIncidente(req.body);
    const informeGuardado = await nuevoInforme.save();
    res.status(201).json(informeGuardado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para obtener todos los informes de incidentes
const obtenerInformesIncidentes = async (req, res) => {
  try {
    const informes = await InformeIncidente.find();
    res.json(informes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para obtener un informe de incidente por ID
const obtenerInformeIncidentePorID = async (req, res) => {
  try {
    const informe = await InformeIncidente.findById(req.params.id);
    if (!informe) {
      return res.status(404).json({ error: 'Informe de incidente no encontrado' });
    }
    res.json(informe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para actualizar un informe de incidente por ID
const actualizarInformeIncidente = async (req, res) => {
  try {
    const informeActualizado = await InformeIncidente.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!informeActualizado) {
      return res.status(404).json({ error: 'Informe de incidente no encontrado' });
    }
    res.json(informeActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Controlador para eliminar un informe de incidente por ID
const eliminarInformeIncidente = async (req, res) => {
  try {
    const informeEliminado = await InformeIncidente.findByIdAndRemove(req.params.id);
    if (!informeEliminado) {
      return res.status(404).json({ error: 'Informe de incidente no encontrado' });
    }
    res.json({ mensaje: 'Informe de incidente eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = {
  crearInformeIncidente,
  obtenerInformesIncidentes,
  obtenerInformeIncidentePorID,
  actualizarInformeIncidente,
  eliminarInformeIncidente,
};
