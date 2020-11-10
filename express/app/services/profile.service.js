const { ProfileModel, ChatModel } = require("../models");
const errorHandler = require("../helpers/error-helper");

const pegaTodosProfiles = async (idUsuario, pagina = 1, limite = 20) => {
    const offset = (pagina - 1) * limite;   
    try {
        let profiles = await ProfileModel.findAll({
            include: [ChatModel],
            offset: offset,
            limit: limite,
            order:  [['nome', 'DESC']]
        });

        profiles = profiles.map(profile => {
            profile = profile.toJSON();
            profile.isLiked = profile.Chats
                .findIndex(chat => chat.id_usuario == idUsuario) != -1;
            return profile;
        });
        
        return profiles;
    } catch (error) {
        throw errorHandler('Não foi possível carregar profiles', 500, [])
    }
}

const criarProfile = async (profile) => {
    try {
        const profileCriado = await ProfileModel.create(profile);
        return profileCriado;
    } catch (error) {
        throw errorHandler("Erro de validação", 400, error.errors);
    }
}

const criarChat = async (idProfile, idUsuario) => {
    try {

        let chatCriado = await ChatModel.findOne({
            where: { id_usuario: idUsuario, id_profile: idProfile }
        });
        
        if(!chatCriado) {
            chatCriado = await ChatModel.create({ 
               nome: "chat por like",
               id_usuario: idUsuario,
               id_profile: idProfile,
               descricao: "chat criado por like"
             });
        }
        return chatCriado;
    } catch (error) {
        throw errorHandler("Erro ao tentar dar like", 400, error.errors);
    }
}

module.exports = {
    pegaTodosProfiles,
    criarProfile,
    criarChat
}