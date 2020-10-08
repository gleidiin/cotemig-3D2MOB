const ChatModel = require("./chats.model");
const MensagemModel = require("./mensagem.model");
const ProfileModel = require("./profile.model");
const UsuarioModel = require("./usuario.model");

ProfileModel.hasMany(ChatModel, { foreignKey: 'id_profile' });
ChatModel.hasMany(MensagemModel, { foreignKey: 'id_chat' });

module.exports ={
    ChatModel,
    MensagemModel,
    ProfileModel,
    UsuarioModel
}
