const express = require("express");
const router = express.Router(); 
const contoller = require("./profile.controller");
const auth    = require("../../helpers/middlewares/auth.middleware")
const BASE_PATH = '/'

router.get(BASE_PATH, auth, contoller.pegarTodos)
      .post(BASE_PATH, auth, contoller.criarPost)
      .post(BASE_PATH + ':id/like', auth, contoller.likePost);

module.exports = router;