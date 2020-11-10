const { me } = require("../../services/usuario.service")

const autenticacao = (req, res, next) => {
    const auth = req.header('Authorization');

    if(auth && auth.includes("Bearer ")) {
        const token = auth.split(' ')[1]

        me(token).then(usuario => {
            req.usuario = usuario;
            next();
        }).catch(err => {
            res.status(err.status).send(err);
        });

    } else {
        res.sendStatus(401);
    }
}

module.exports = autenticacao; 