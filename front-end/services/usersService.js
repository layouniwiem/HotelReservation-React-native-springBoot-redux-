import axios from 'axios';
const USER_API_BASE_URL = 'http://localhost:8090/api/users';


export const usersService = (url,method,body)=>{
   console.log('hello from service');
//     axios({
        
//         url: `http://localhost:8090/api/users${url}`,
//         method,
//         data: body,
       
//       });
// }
// async function usersService(url){
//     let data = await fetch(url)
//       .then(res => {
//         return  res.json()
//       })
//       .catch(err => {
//         console.log(' an error:', err)
//       });

//     return data;
//   } 
  axios.get('http://192.168.1.118:8090/api/users/All')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });}
 
