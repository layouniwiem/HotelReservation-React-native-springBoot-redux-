import axios from 'axios';
import *  as config from '../config/strings.json'

const USER_API_BASE_URL = config.link+'8001/api';



export const reservationService = (url, method, body = {},token = "") => {
  console.log('reservationService',url)
  return axios({
    method,
    url: USER_API_BASE_URL + `/reservation${url}`,
    data: body,
    headers: {
    //   ...composeToken(token),
    },
  });
}

