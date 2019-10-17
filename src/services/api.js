// IMPORTANDO DEPENDENCIAS EXTERNAS
import axios from 'axios';

// CRIANDO UMA CONEXÃO COM A API
const api = axios.create({
    baseURL: 'http://localhost:3333',
});

// EXPORTANDO A CONEXÃO COM API
export default api;