import axios from 'axios';
import *  as config from '../config/strings.json'
const USER_API_BASE_URL =  config.link+'8098';


export const authsService = (url, method, body,token = "") => {
  console.log('AuthService',USER_API_BASE_URL+ `/${url}`)
  console.log('body',body)
  let config = {
    headers: {
     'Content-Type':'application/json',
    }
  }
  return axios({
    method,
    // url:USER_API_BASE_URL + `/${url}`,
    url:USER_API_BASE_URL+ `/${url}`,
    data: {
      username: 'user1',
      password: '0000'
    },
    config
  });
}

// import axios from "axios";

// const API_URL = "http://localhost:8000/";

// const register = (username, email, password) => {
//   return axios.post(API_URL + "signup", {
//     username,
//     email,
//     password,
//   });
// };

// const login = (username, password) => {
//   return axios
//     .post(API_URL + "authenticate", {
//       username,
//       password,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }

//       return response.data;
//     });
// };

// const logout = () => {
//   localStorage.removeItem("user");
// };

// export default {
//   register,
//   login,
//   logout,
// };
