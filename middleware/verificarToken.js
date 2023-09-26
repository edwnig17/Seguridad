const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuarios.js'); // Asegúrate de que la ruta y el nombre del modelo sean correctos

// Middleware para verificar un token JWT
const verificarToken = (req, res, next) => {
  // Obtén el token de la cabecera de la solicitud
  const token = req.header('Authorization');

  // Si no se proporciona un token, responde con un error de autenticación
  if (!token) {
    return res.status(401).json({ error: 'Acceso no autorizado' });
  }

  try {
    // Verifica y descodifica el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Reemplaza 'JWT_SECRET_KEY' con el nombre de la variable en tu archivo .env
    
    // Busca al usuario en la base de datos utilizando la información del token (ajusta esto según tu modelo)
    const usuario = Usuario.findOne({ usuario: decoded.usuario });

    if (!usuario) {
      return res.status(401).json({ error: 'Acceso no autorizado' });
    }

    // Agrega el usuario al objeto de solicitud para que esté disponible en las rutas protegidas
    req.usuario = usuario;

    // Continúa con la siguiente función de middleware o ruta
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Acceso no autorizado' });
  }
};

module.exports = verificarToken;
