import axios from 'axios';
import { UrlComum } from './UrlComum';


function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function ApiLogin(body) {
  const promise = axios.post(`${UrlComum}/auth/login`, body);

  return promise;
}

function ApisignUp(body) {
  const promise = axios.post(`${UrlComum}/auth/sign-up`, body);

  return promise;
}


function ApiHabitos(token) {
  const config = createConfig(token);

  const promise = axios.get(`${UrlComum}/habits`, config);

  return promise;
}

function createHabit(body, token) {
  const config = createConfig(token);

  const promise = axios.post(`${UrlComum}/habits`, body, config);

  return promise;
}

function deleteHabit(id, token) {
  const config = createConfig(token);

  const promise = axios.delete(`${UrlComum}/habits/${id}`, config);

  return promise;
}

function gethojeHabits(token) {
  const config = createConfig(token);

  const promise = axios.get(`${UrlComum}/habits/hoje`, config);

  return promise;
}

function checkHabit(id, token) {
  const config = createConfig(token);

  const promise = axios.post(`${UrlComum}/habits/${id}/check`, null, config);

  return promise;
}

function uncheckHabit(id, token) {
  const config = createConfig(token);

  const promise = axios.post(`${UrlComum}/habits/${id}/uncheck`, null, config);

  return promise;
}

function HabitosDeHoje(token) {
  const config = createConfig(token);

  const promise = axios.get(`${UrlComum}/habits/today`, config);

  return promise;
}

const api = {
  HabitosDeHoje,
  ApiLogin,
  ApisignUp,
  ApiHabitos,
  createHabit,
  deleteHabit,
  gethojeHabits,
  checkHabit,
  uncheckHabit
}

export default api;