import http from './api';

const AUTH_LOGIN = '/auth/login';
const AUTH_ME    = '/auth/me';
export const login = async (email, senha) => {
    const { data } = await http.post(AUTH_LOGIN, {email, senha});
    if (data.token) {
        localStorage.setItem('token', data.token);
        return true;
    }
}

export const me = async() => {
    const { data } = await http.get(AUTH_ME);
    return data;
}