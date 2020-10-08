import http from './api';

const ENDPOINT = "/profiles/";
const LIKE = '/like';

const pegarTodosProfiles = async () => {
    const response = await http.get(ENDPOINT);
    return response.data ? response.data : []; 
}

const likeProfile = async(id) => {
    await http.post(ENDPOINT + id + LIKE)
}
 
export {
    pegarTodosProfiles,
    likeProfile
}