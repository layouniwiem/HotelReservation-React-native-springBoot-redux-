import axios from 'axios';
import *  as config from '../config/strings.json'

const USER_API_BASE_URL = config.link+'8099/api';



export const cityService = (url, method, body = {},token = "") => {
  console.log('cityService',url)
  return axios({
    method,
    url: USER_API_BASE_URL + `/Countries${url}`,
    data: body,
    headers: {
    //   ...composeToken(token),
    },
  });
}

