const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuarios.js'); 

const generarToken = (usuario) => {
  const secretKey = process.env.SECRET_KEY; 

  return jwt.sign({ usuario }, secretKey, { expiresIn: '1h' }); 
};

// Controlador para el inicio de sesión y generación de tokens
const login = async (req, res) => {
  const { usuario, contraseña } = req.body;

  try {
    // Busca al usuario en la base de datos (ajusta esto según tu modelo)
    const usuarioEncontrado = await Usuario.findOne({ usuario });

    if (usuarioEncontrado && usuarioEncontrado.contraseña === contraseña) {
      // Autenticación exitosa, genera un token
      const token = generarToken(usuarioEncontrado.usuario);
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Autenticación fallida' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};



module.exports = {
  login,
};
