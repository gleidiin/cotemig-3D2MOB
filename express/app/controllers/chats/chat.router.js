const express = require("express");
const router = express.Router(); 
const contoller = require("./chat.controller");
const auth      = require("../../helpers/middlewares/auth.middleware")

const BASE_PATH = '/'

router.get(BASE_PATH, auth, contoller.pegarTodasOsChats)
      .get(BASE_PATH + ':id/mensagens', auth, contoller.pegarTodasMensagensPorChatId)
      .post(BASE_PATH + ':id/mensagens', auth, contoller.criarMensagemPorChatId);

module.exports = router;