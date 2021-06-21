import { usersService } from "../services/usersService";
import * as actions from "../actions/userTypes.js"
import { authsService } from  "../services/authService";
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const userGetAll = () => async (dispatch) => {
  try {
    console.log("enter")
    dispatch({ type: actions.USER_LOADING });
    const res = await usersService('/All', "get")
    console.log("end", res.data)
    dispatch({ type: actions.USER_GET_DATA, payload: res.data });
    return res;
  } catch (err) {
    dispatch({ type: actions.USER_END_LOADING });
    console.log("hello userError", err)
  }

}
export const userGetData = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.USER_LOADING });
    const res = await usersService("/"+id, "get");
    dispatch({ type: actions.USER_GET_DATA, payload: res.data });

    return res;
  } catch (err) {
    dispatch({ type: actions.USER_END_LOADING });
    console.log("hello userError", err)

  }
};
export const userDeleteData = (id) => async (dispatch) => {
  try {
    console.log("in delete");
    dispatch({ type: actions.USER_LOADING });
    const res = await usersService('/delete/'+id, "delete");
    console.log("out delete before dispatch");
    dispatch({ type: actions.USER_GET_DATA, payload: res.data });
    console.log("out delete");
    return res;
    
  } catch (err) {
    dispatch({ type: actions.USER_END_LOADING });
    console.log("hello userError", err)
  }
  //return {}

}

export const userPostData = (user) => async (dispatch) => {
  try {
    dispatch({ type: actions.USER_LOADING });
    const res = await usersService("/add", "post", user);
    dispatch({ type: actions.USER_GET_DATA, payload: res.data });
    dispatch({ type: "REGISTER", payload: res.data });

    return res;
  } catch (err) {
    dispatch({ type: actions.USER_END_LOADING });
    console.log("hello userError", err)

  }
  


}

export const userUpdatedData = (user) => async (dispatch) => {
  try {
    dispatch({ type: actions.USER_LOADING });
    const res = await usersService("/update", "update", user)
    dispatch({ type: actions.USER_GET_DATA, payload: res.data });
    return res;
  } catch (err) {
    dispatch({ type: actions.USER_END_LOADING });
    console.log("hello userError", err)

  }

}

 export const login = (user) => async (dispatch) => {
    try {
      dispatch({ type: actions.USER_LOADING });
      const res = await authsService("authenticate", "post", user);
      console.log("out",res)
      setAuthorizationHeader(res.data.jwt)
      console.log("res",res.data.jwt)
      dispatch({ type: actions.LOGIN_SUCCESS, payload: res.data });

      return res;
    } catch (err) {
      dispatch({ type: actions.USER_END_LOADING });
      console.log("hello userError login", err)
  
    }

}
export const  signOut= () =>async (dispatch) => {
  // setUserToken(null);
  // setIsLoading(false);
  try {
    dispatch({ type: "LOGOUT", payload: null });

    await AsyncStorage.getItem('userToken', (err,token)=>{
      console.log("hello from signout",token)
     })
    await AsyncStorage.removeItem('userToken');
    // setAuthorizationHeader(null);
  } catch (e) {
    console.log(e);
  }


}
const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`
  AsyncStorage.setItem('userToken', FBIdToken);
   //axios.defaults.headers.common['Authorization'] = FBIdToken;
}