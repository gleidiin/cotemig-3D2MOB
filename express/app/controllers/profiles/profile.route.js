const express = require("express");
const router = express.Router(); 
const contoller = require("./profile.controller");

const BASE_PATH = '/'

router.get(BASE_PATH, contoller.pegarTodos)
      .post(BASE_PATH, contoller.criarPost)
      .post(BASE_PATH + ':id/like', contoller.likePost);

module.exports = router;