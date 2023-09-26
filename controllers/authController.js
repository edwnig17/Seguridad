const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuarios.js'); // Asegúrate de que la ruta y el nombre del modelo sean correctos

// Función para generar un token JWT
const generarToken = (usuario) => {
  // Cargar la clave secreta desde las variables de entorno
  const secretKey = process.env.JWT_SECRET_KEY; // Reemplaza 'JWT_SECRET_KEY' con el nombre de la variable en tu archivo .env

  return jwt.sign({ usuario }, secretKey, { expiresIn: '1h' }); // Caducidad de 1 hora
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
