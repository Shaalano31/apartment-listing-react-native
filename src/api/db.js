import axios from 'axios';

export const MyAxios = axios.create({
  baseURL: 'http://10.0.2.2:3000',
  timeout: 60 * 1 * 1000,
  timeoutErrorMessage: 'network_error',
  headers: {
    'Content-Type': 'application/json',
  },
});
