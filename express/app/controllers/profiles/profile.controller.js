const { pegaTodosProfiles, criarProfile } = require("../../services/profile.service");

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
    res.send({});
}

module.exports = {
    pegarTodos, 
    criarPost,
    likePost
}


// profile
// app.get("/profiles", async (req, res) => {
//     const profiles = await ProfileModel.findAll({ include: [ChatModel]})
//     res.send(profiles);
//   });
  
//   app.post("/profiles", async (req, res) => {
//     const profile = req.body;
//     profile.id_usuario = req.usuario.id;
  
//     const profileCriado = await ProfileModel.create(profile);
//     res.status(201).send(profileCriado);
//   });
  
//   app.post("/profiles/:id/like", async(req, res) => {
//     const { id } = req.params;
  
//     const chatCriado = await ChatModel.create({ 
//         nome: "chat por like",
//         id_usuario: req.usuario.id,
//         id_profile: id,
//         descricao: "chat criado por like"
//       });
  
//     res.status(201).send(chatCriado);
//   });

