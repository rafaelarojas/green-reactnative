import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',  // ou o IP da máquina se estiver testando no emulador físico.
});

export default api;
