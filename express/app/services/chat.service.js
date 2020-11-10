const { MensagemModel, ChatModel } = require("../models");
const errorHandler = require("../helpers/error-helper")

const pegarTodosChatPorIdUsuario = async (idUsuario) => {
    const chats = await ChatModel.findAll({ where: { id_usuario: idUsuario}});
    return chats;
}

const pegarTodasMensagemPorChatId = async (id) => {
    const mensagens = await MensagemModel.findAll({ where: { id_chat: id } });
    return mensagens;
};
  
const criarMensagemPorChatId = async (idUsuario, idChat, mensagem) => {
    mensagem.id_usuario = idUsuario; 
    mensagem.id_chat = idChat;
    const chat = await ChatModel.findByPk(idChat);
    // 
    const mensagemCriada = await MensagemModel.create(mensagem);
    return mensagemCriada
}


module.exports = {
    pegarTodosChatPorIdUsuario,
    pegarTodasMensagemPorChatId,
    criarMensagemPorChatId
}
