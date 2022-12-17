import axios from 'axios';
import { UrlComum } from './UrlComum';


function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body) {
  const promise = axios.post(`${UrlComum}/auth/login`, body);

  return promise;
}

function signUp(body) {
  const promise = axios.post(`${UrlComum}/auth/sign-up`, body);

  return promise;
}

function getDailyHistory(token) {
  const config = createConfig(token);

  const promise = axios.get(`${UrlComum}/habits/history/daily`, config);

  return promise;
}

function getHabits(token) {
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

const api = {
  login,
  signUp,
  getDailyHistory,
  getHabits,
  createHabit,
  deleteHabit,
  gethojeHabits,
  checkHabit,
  uncheckHabit
}

export default api;