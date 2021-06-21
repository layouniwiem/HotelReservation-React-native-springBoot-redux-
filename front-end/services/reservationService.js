import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import *  as config from '../config/strings.json'
const USER_API_BASE_URL = config.link+'8098/api';

export const reservationService = (url, method, body ={},token ) => {
  
	const cookie =  AsyncStorage.getItem('userToken')
  const composeToken = (token) =>
   {
     console.log(token,"token from service") ;
     token ? { Authorization: token } : {}; 
    }

  const headers = {
    'Content-Type': 'application/json'
  }
  console.log("url,",USER_API_BASE_URL + `/reserver${url}`)
  return axios({
    method,
    url: USER_API_BASE_URL + `/reserver${url}`,
    data: body,
    headers: 
    {
        Authorization: token 
       
    },
  });
}


const getAuthorizationHeader = (token) => {
  const FBIdToken =
  AsyncStorage.getItem('userToken');
   //axios.defaults.headers.common['Authorization'] = FBIdToken;
   return FBIdToken
}