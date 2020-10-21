const jwt = require("jsonwebtoken");
const { UsuarioModel } = require("../models")
const errorHandler = require("../helpers/error-helper")
const SECRET_KEY = 'BLA';

const criarUsuario = async (usuario) => {
    try {
        const usuarioCriado = await UsuarioModel.create(usuario);
        return { token: jwt.sign(usuarioCriado.toJSON(), SECRET_KEY) }
    } catch (error) {
        throw errorHandler("Não foi possivel criar usuário", 400, error.errors);
    } 
}

const login = async (email, senha) => {
    const usuario = await UsuarioModel.findOne({
        where: { email: email, senha: senha }
    })

    if(usuario) {
        return { token: jwt.sign(usuario.toJSON(), SECRET_KEY) }
    } 
    throw errorHandler("Usuário ou senha incorretos", 401);
}

const me = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch(error) {
        throw errorHandler("Token enviado vencido ou invalidado", 401);
    }
}

module.exports = {
    criarUsuario,
    login, 
    me,
}