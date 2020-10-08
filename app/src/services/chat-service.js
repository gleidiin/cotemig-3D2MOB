import http from './api';

const ENDPOINT = "/chats/";

const pegaMensagens = async (id) => {
    const resposta = await http.get(ENDPOINT + id + '/mensagens');
    return resposta.data ? resposta.data : []
}

const adicionaMensagem = async (id, mensagem) => {
    const resposta = await http.post(ENDPOINT + id + '/mensagens', mensagem);
} 

export {
    pegaMensagens, adicionaMensagem
}