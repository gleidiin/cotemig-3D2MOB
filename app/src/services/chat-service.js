import http from './api';

const ENDPOINT = "/chats/";

const pegarTodosChats = async () => {
    const resposta = await http.get(ENDPOINT);
    return resposta.data ? resposta.data : []
}

const pegaMensagens = async (id) => {
    const resposta = await http.get(ENDPOINT + id + '/mensagens');
    return resposta.data ? resposta.data : []
}

const adicionaMensagem = async (id, mensagem) => {
    const resposta = await http.post(ENDPOINT + id + '/mensagens', mensagem);
    return resposta.data;
} 

export {
    pegarTodosChats,
    pegaMensagens,
    adicionaMensagem
}