/* eslint-disable import/no-unresolved */
import axios from 'axios';
import { API_URL } from '@env';

const API = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

export default API;
