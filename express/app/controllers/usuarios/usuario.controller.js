app.post("/usuarios", async (req, res) => {
    const usuario = req.body;
    const usuarioCriado = await UsuarioModel.create(usuario);
    res.status(201).send(usuarioCriado);
  });
  
  