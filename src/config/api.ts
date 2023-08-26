import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://schoolapi.syncrostudios.com.br:5555/',
});