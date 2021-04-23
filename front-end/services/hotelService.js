import axios from 'axios';
const USER_API_BASE_URL = 'http://192.168.1.192:8099/api';



export const hotelService = (url, method, body = {},token = "") => {
  console.log('hotelService',body)
  return axios({
    method,
    url: USER_API_BASE_URL + `/hotel${url}`,
    data: body,
    headers: {
    //   ...composeToken(token),
    },
  });
}

