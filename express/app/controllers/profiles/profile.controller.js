const { pegaTodosProfiles, criarProfile, criarChat } = require("../../services/profile.service");

const pegarTodos = async (req, res) => {
    try {
        const profiles = await pegaTodosProfiles()
        res.send(profiles)
    } catch (error) {
        res.status(error.status).send(error);
    }
}

const criarPost = (req, res) => {
    const profile = req.body;
    criarProfile(profile).then(profileCriado => {
        res.send(profileCriado)
    }).catch(err => {
        res.status(err.status).send(err)
    })
}

const likePost = (req, res) => {
    const idUsuario = req.user.id;
    const { id } = req.params;

    criarChat(id, idUsuario).then(profileCriado => {
        res.send(profileCriado)
    }).catch(err => {
        res.status(err.status).send(err)
    })
}

module.exports = {
    pegarTodos, 
    criarPost,
    likePost
}
