import axios from 'axios';
const USER_API_BASE_URL = 'http://192.168.1.93:8000/api';

const composeToken = (token) =>
  token ? { Authorization: `Bearer ${token}` } : {};

export const usersService = (url, method, body = {},token = "") => {
  console.log('usersService')
  return axios({
    method,
    url: USER_API_BASE_URL + `/users${url}`,
    data: body,
    headers: {
      ...composeToken(token),
    },
  });
}

