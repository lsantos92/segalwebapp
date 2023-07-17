import axios from 'axios';

const conn = axios.create({
    baseURL: "http://localhost:3001/",
    timeout: 30000,
});

export default conn;