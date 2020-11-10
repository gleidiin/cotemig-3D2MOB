const profileRoute = require("../controllers/profiles/profile.route");
const usuarioRoute = require("../controllers/usuarios/usuario.route");
const chatRoute    = require("../controllers/chats/chat.router");

module.exports = (app) => {
    app.use('/profiles', profileRoute);
    app.use('/auth', usuarioRoute);
    app.use('/chats', chatRoute);
}