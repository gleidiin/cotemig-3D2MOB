const service = require('../../services/chat.service');

const pegarTodasOsChats = async (req, res) => {
  const { id } = req.usuario;
  const chats = await service.pegarTodosChatPorIdUsuario(id);
  res.send(chats);
}

const pegarTodasMensagensPorChatId = async (req, res) => {
  const { id } = req.params;
  const mensagens = await service.pegarTodasMensagemPorChatId(id);
  res.send(mensagens);
}

const criarMensagemPorChatId = async (req, res) => {
  const { id } = req.params;
  const mensagem = req.body;
  const mensagemCriada = await service.criarMensagemPorChatId(req.usuario.id, id, mensagem);
  res.status(201).send(mensagemCriada);
}


module.exports = {
  pegarTodasOsChats,
  pegarTodasMensagensPorChatId,
  criarMensagemPorChatId
}