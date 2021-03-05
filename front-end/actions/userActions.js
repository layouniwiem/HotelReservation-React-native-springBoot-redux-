import {userService} from "../services/usersService";
import * as actions from "../actions/userTypes.js"
const axios = require('axios');
const USER_API_BASE_URL ='http://192.168.1.118:8090/api/users/All' ;



export const userGetAll=()=> async (dispatch)=>{
  console.log('alon')
    try {
      
        console.log('alo')
        dispatch({ type: actions.USER_LOADING });
        const res = await serviceUser();
        dispatch({ type: actions.USER_GET_DATA, payload: res.data });
        return res;
      } catch (err) {
        dispatch({ type:actions.USER_END_LOADING });
        console.log("hello")
      }

}
export const userPostData=(user)=> async (dispatch)=>{
    try {
        dispatch({ type: actions.USER_LOADING });
        const res = await serviceUser("/addUser", "post",user);
        dispatch({ type:actions.USER_GET_DATA, payload: res.data });
        return res;
      } catch (err) {
        dispatch({ type: actions.USER_END_LOADING });
      }

}

