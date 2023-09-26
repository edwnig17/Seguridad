
const Usuario = require('../models/Usuarios.js'); 

// Controlador para crear un nuevo usuario
async function create(req, res) {
  try {
    const nuevoUsuario = new Usuario(req.body);
    const usuarioGuardado = await nuevoUsuario.save();
    res.status(201).json(usuarioGuardado);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
}

// Controlador para obtener todos los usuarios
async function getAll(req, res) {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
}

// Controlador para obtener un usuario por ID
async function getById(req, res) {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findById(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
}

// Controlador para actualizar un usuario por ID
async function update(req, res) {
  const { id } = req.params;
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(id, req.body, { new: true });
    if (!usuarioActualizado) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
}

// Controlador para eliminar un usuario por ID
async function remove(req, res) {
  const { id } = req.params;
  try {
    const usuarioEliminado = await Usuario.findByIdAndRemove(id);
    if (!usuarioEliminado) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
