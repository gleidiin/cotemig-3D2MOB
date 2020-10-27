import axios from 'axios';

const BASE_URL = "http://localhost:8080";

const http = axios.create({
    baseURL: BASE_URL
});

http.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if(token)
        config.headers['Authorization'] = `Bearer ${token}`;
    return config;
});

export default http;