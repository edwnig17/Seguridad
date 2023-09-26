
function verificarRol(rolPermitido) {
    return (req, res, next) => {
      const usuario = req.usuario;
  
      if (usuario && usuario.rol === rolPermitido) {
      
        next();
      } else {
       
        res.status(403).json({ error: 'Acceso no autorizado' });
      }
    };
  }
  
  module.exports = verificarRol;
  