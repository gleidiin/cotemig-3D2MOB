const jwt = require("jsonwebtoken");
const { UsuarioModel } = require("../models")
const errorHandler = require("../helpers/error-helper")
const SECRET_KEY = 'MINHA-SECRET-KEY';


const gerarTokenCriptografado = (dado) => {
    let token = jwt.sign(dado, SECRET_KEY);
    token = Buffer.from(token).toString('base64');
    return { token }
}

const descriptografarToken = (token) => {
    return Buffer.from(token, 'base64').toString('utf-8');
}

const criarUsuario = async (usuario) => {
    try {
        const usuarioCriado = await UsuarioModel.create(usuario);
        const usuarioJson = usuarioCriado.toJSON()
        delete usuarioJson.senha;
        return gerarTokenCriptografado(usuarioJson)
    } catch (error) {
        throw errorHandler("Não foi possivel criar usuário", 400, error.errors);
    } 
}

const login = async ({ email, senha }) => {
    let usuario = await UsuarioModel.findOne({
        where: { email, senha }
    });
    usuario = usuario.toJSON();
    delete usuario.senha;

    if(usuario) {
        return gerarTokenCriptografado(usuario)
    } 
    throw errorHandler("Usuário ou senha incorretos", 401);
}

const me = async (token) => {
    try {
        const tokenDescriptografado = descriptografarToken(token)
        return jwt.verify(tokenDescriptografado, SECRET_KEY);
    } catch(error) {
        throw errorHandler("Token enviado vencido ou invalidado", 401);
    }
}

module.exports = {
    criarUsuario,
    login, 
    me,
}