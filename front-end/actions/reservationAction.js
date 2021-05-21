import * as actions from "../actions/userTypes.js"
import { reservationService } from "../services/reservationService";
export const reservationGetAll = () => async (dispatch) => {
    try {
      console.log("in reservations ")
      dispatch({ type: actions.RESERVATION_LOADING });
      const res = await reservationService('/all', "post")
      console.log("end", res.data)
      dispatch({ type: actions.RESERVATION_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.RESERVATION_END_LOADING });
      console.log("hello HOTELSError", err)
    }
  
  }
  export const reservationPostData = (reserv) => async (dispatch) => {
    try {
      console.log("in reservations ")
      dispatch({ type: actions.RESERVATION_LOADING });
      const res = await reservationService('/add', "post",reserv)
      console.log("end", res.data)
      dispatch({ type: actions.RESERVATION_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.RESERVATION_END_LOADING });
      console.log("hello RESERVATIONEror", err)
    }
  
  }
  export const reservationUpdateData = (reserv) => async (dispatch) => {
    try {
      console.log("in reservations ")
      dispatch({ type: actions.RESERVATION_LOADING });
      const res = await reservationService('/update', "update",reserv)
      console.log("end", res.data)
      dispatch({ type: actions.RESERVATION_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.RESERVATION_END_LOADING });
      console.log("hello RESERVATIONEror", err)
    }
  
  }