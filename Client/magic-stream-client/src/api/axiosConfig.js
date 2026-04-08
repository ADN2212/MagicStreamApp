import axios from 'axios';
//const apiUrl = import.meta.env.VITE_API_BASE_URL;

//Esto es para tomar la API_URL que se inyeacta desde el docker-compose.
const apiUrl = window.__ENV__?.API_URL;

export default axios.create({
    baseURL:apiUrl,
    headers:{'Content-Type':'application/json'},
    withCredentials: true,
})