const profileRoute = require("../controllers/profiles/profile.route");
const usuarioRoute = require("../controllers/usuarios/usuario.route");

module.exports = (app) => {
    app.use('/profiles', profileRoute);
    app.use('/auth', usuarioRoute);
}