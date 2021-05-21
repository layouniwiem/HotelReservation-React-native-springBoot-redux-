import axios from 'axios';
import *  as config from '../config/strings.json'
const USER_API_BASE_URL =config.link+ '8001/api';

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
