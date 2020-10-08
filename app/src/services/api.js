import axios from 'axios';

const BASE_URL = "http://localhost:8080";

const http = axios.create({
    baseURL: BASE_URL
});

export default http;