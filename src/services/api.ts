import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'Token baa627fc73a85a1d6f1eb6f06bfb6e9b36bf633b';

export const api = axios.create({
  baseURL: 'https://lora-api-xoaejmxziq-rj.a.run.app',
});
