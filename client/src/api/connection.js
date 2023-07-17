import axios from 'axios';
/**
 * @description Cria uma instância do axios com a configuração base para a ligação ao servidor
 */
const conn = axios.create({
    baseURL: "http://localhost:3001/",
    timeout: 30000,
});

export default conn;