import http from './api';

const ENDPOINT = "/profiles/";
const LIKE = '/like';

const pegarTodosProfiles = async () => {
    const response = await http.get(ENDPOINT);
    return response.data ? response.data : []; 
}

const likeProfile = async(id) => {
    const { data } = await http.post(ENDPOINT + id + LIKE)
    return data;
}
 
export {
    pegarTodosProfiles,
    likeProfile
}