const UsuarioService = require("../../services/usuario.service");

const criarUsuario = (req, res) => {
  const usuario = req.body;
  UsuarioService.criarUsuario(usuario)
    .then(token => {
      res.status(201).send(token)
    }).catch(err => {
      res.status(err.status).send(err);
    });
}

const login = (req, res) => {
  const loginForm = req.body;

  UsuarioService.login(loginForm)
    .then(token => {
      res.status(201).send(token)
    }).catch(err => {
      console.log(err);
      res.status(401).send(err);
    })
}

const me = (req, res) => {
  res.send(req.usuario);
}

module.exports = {
  criarUsuario,
  login,
  me
}
  
  