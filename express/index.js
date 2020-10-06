const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors");
const app        = express();

const { UsuarioModel, ProfileModel, ChatModel, MensagemModel } = require("./database")

const PORTA = 8080;

app.use(bodyParser.json());
app.use(cors());

app.use("/**", async (req, res, next) => {
  const usuario = await UsuarioModel.findByPk(1);
  req.usuario = usuario; 
  next();
});

// profile
app.get("/profiles", async (req, res) => {
  const profiles = await ProfileModel.findAll({ include: [ChatModel]})
  res.send(profiles);
});

app.post("/profiles", async (req, res) => {
  const profile = req.body;
  profile.id_usuario = req.usuario.id;

  const profileCriado = await ProfileModel.create(profile);
  res.status(201).send(profileCriado);
});

app.post("/profiles/:id/like", async(req, res) => {
  const { id } = req.params;

  const chatCriado = await ChatModel.create({ 
      nome: "chat por like",
      id_usuario: req.usuario.id,
      id_profile: id,
      descricao: "chat criado por like"
    });

  res.status(201).send(chatCriado);
});

// chats
app.get("/chats/:id/mensagens", async (req, res) => {
  const { id } = req.params;
  const mensagens = await MensagemModel.findAll({ where: { id_chat: id } });
  res.send(mensagens);
});

app.post("/chats/:id/mensagens", async (req, res) => {
  const { id } = req.params;
  const idUsuario = req.usuario.id;
  const mensagem = req.body;

  mensagem.id_usuario = idUsuario; 
  mensagem.id_chat = id;

  const mensagens = await MensagemModel.create(mensagem);
  res.send(mensagens);
});

// usuario

app.post("/usuarios", async (req, res) => {
  const usuario = req.body;
  const usuarioCriado = await UsuarioModel.create(usuario);
  res.status(201).send(usuarioCriado);
});


app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});
