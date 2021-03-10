import { usersService } from "../services/usersService";
import * as actions from "../actions/userTypes.js"



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
    const res = await usersService("/addUser", "post", user);
    dispatch({ type: actions.USER_GET_DATA, payload: res.data });
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

