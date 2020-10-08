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