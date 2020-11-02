import http from './api';

const AUTH_LOGIN = '/auth/login';
const AUTH_ME    = '/auth/me';
const AUTH_SIGNUP = '/auth/signup';

const salvarToken = (token) => {
    localStorage.setItem('token', token);
}

const deletarToken = () => {
    localStorage.removeItem('token');
}

export const isLogged = () => {
    return !!localStorage.getItem('token');
}

export const login = async (email, senha) => {
    const { data } = await http.post(AUTH_LOGIN, {email, senha});
    if (data.token) {
        salvarToken(data.token);
        return true;
    }
    
    return false;
}

export const me = async() => {
    const { data } = await http.get(AUTH_ME);
    return data;
}

export const criarUsuario = async(usuario) => {
    const { data } = await http.post(AUTH_SIGNUP, usuario);
    if (data.token) {
        salvarToken(data.token);
        return true;
    }

    return false;
}


export const deslogar = () => {
    deletarToken();
}