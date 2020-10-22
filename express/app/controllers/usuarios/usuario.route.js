const express = require("express");
const router = express.Router(); 
const auth = require("../../helpers/middlewares/auth.middleware");
const contoller = require("./usuario.controller");

const BASE_PATH = '/'

router.get(BASE_PATH + 'me',auth, contoller.me)
      .post(BASE_PATH + 'signup', contoller.criarUsuario)
      .post(BASE_PATH + 'login', contoller.login);

module.exports = router;