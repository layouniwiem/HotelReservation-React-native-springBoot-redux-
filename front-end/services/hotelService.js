import axios from 'axios';
import *  as config from '../config/strings.json'

const USER_API_BASE_URL = config.link+'8099/api';



export const hotelService = (url, method, body = {},token = "") => {
  console.log('hotelService',url)
  return axios({
    method,
    url: USER_API_BASE_URL + `/hotel${url}`,
    data: body,
    headers: {
    //   ...composeToken(token),
    },
  });
}

