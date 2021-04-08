import axios from 'axios';
const USER_API_BASE_URL = 'http://192.168.1.93:8000';


export const authsService = (url, method, body = {}) => {
  console.log('AuthService',url)
  const headers = {
    'Content-Type': 'application/json'
  }
  return axios({
    method,
    url: USER_API_BASE_URL + `/${url}`,
    data: body,
    headers: headers
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
