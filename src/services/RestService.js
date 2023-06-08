import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Access-Control-Allow-Origin': '*', // Define a política de origem cruzada (CORS) permitindo todas as origens
    'Content-Type': 'application/json',
  },
});

export default api;