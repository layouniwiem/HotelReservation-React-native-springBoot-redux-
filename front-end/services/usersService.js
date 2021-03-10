import axios from 'axios';
const USER_API_BASE_URL = 'http://192.168.1.147:8090/api';


export const usersService = (url, method, body = {}) => {
  console.log('aloo')
  return axios({
    method,
    url: USER_API_BASE_URL + `/users${url}`,
    data: body,
  });
}

