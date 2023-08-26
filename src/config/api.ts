import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://schoolapi.syncrostudios.com.br/',
});