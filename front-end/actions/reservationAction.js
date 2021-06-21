import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useSelector } from "react-redux";
import * as actions from "../actions/userTypes.js"
import { reservationService } from "../services/reservationService";
//  const state=useSelector((state)=>state.users)
export const reservationGetAll = () => async (dispatch) => {
    try {
      
      console.log("in reservations ")
      let userId = await AsyncStorage.getItem('userToken') || 'none';    
          console.log(userId,"hhhhhhhhhh")
      dispatch({ type: actions.RESERVATION_LOADING });
      const res = await reservationService('/All', "get",userId,userId)
      console.log("end", res.data)
      dispatch({ type: actions.RESERVATION_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.RESERVATION_END_LOADING });
      console.log("hello reservationsError", err)
    }
  
  }
  export const hotelDBPostData = (reserv) => async (dispatch) => {
    try {
      // console.log("in reservations ")
      let userId = await AsyncStorage.getItem('userToken') || 'none';     
       console.log(userId,"hhhhhhhhhh")
      dispatch({ type: actions.HOTELSDB_LOADING });
      const res = await reservationService('/addHotel', "post",reserv,userId)
      // console.log("end hotelDBPostData", res.data)
      dispatch({ type: actions.HOTELSDB_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.HOTELSDB_END_LOADING });
      console.log("hello RESERVATIONEror", err)
    }
  
  }
  export const reservationPostData = (reserv) => async (dispatch) => {
    
    try {
      console.log("in reservations reservationPostData ")
      let userId = await AsyncStorage.getItem('userToken') || 'none';    
 
      console.log(reserv,"hhhhhhhhhh")
      dispatch({ type: actions.RESERVATION_LOADING });
      const res = await reservationService('/addReservation', "post",reserv,userId)
      console.log("end", res.data)
      dispatch({ type: actions.RESERVATION_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.RESERVATION_END_LOADING });
      console.log("hello RESERVATIONEror", err)
    }
  
  }
  export const reservationUpdateData = (reserv,id) => async (dispatch) => {
    
    try {
      console.log("in reservations "+reserv.reservation_id)
      let userId = await AsyncStorage.getItem('userToken') || 'none';     
      // console.log(userId,"hhhhhhhhhh")
      dispatch({ type: actions.RESERVATION_LOADING });
      const res = await reservationService('/update/'+id, "put",reserv,userId)
      // console.log("end", res.data)
      dispatch({ type: actions.RESERVATION_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.RESERVATION_END_LOADING });
      console.log("hello RESERVATIONEror", err)
    }
  
  }
  export const inviteePostData = (reserv) => async (dispatch) => {
   
    try {
       console.log("in reservations ")
      dispatch({ type: actions.INVITEE_LOADING });
      let userId = await AsyncStorage.getItem('userToken') || 'none';   
    //  console.log(userId,"hhhhhhhhhh")
      const res = await reservationService('/addInvitee', "post",reserv,userId)
      // console.log("end", res.data)
      dispatch({ type: actions.INVITEE_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.INVITEE_END_LOADING });
      console.log("hello RESERVATIONEror", err)
    }
  
  }
  export const roomDBPostData = (reserv) => async (dispatch) => {
    try {
       console.log("in roomDBPostData ")
      let userId = await AsyncStorage.getItem('userToken') || 'none';     
      // console.log(userId,"hhhhhhhhhh")
      dispatch({ type: actions.ROOMDB_LOADING });
      const res = await reservationService('/addRoom', "post",reserv,userId)
       console.log("end", res.data)
      dispatch({ type: actions.ROOMDB_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.ROOMDB_END_LOADING });
      console.log("hello RESERVATIONEror", err)
    }
  
  }

  // export const DBPostData = (reserv) => async (dispatch) => {
  //   try {
  //     console.log("in reservations ")
  //     dispatch({ type: actions.RESERVATION_LOADING });
  //     const res = await reservationService('/add', "post",reserv)
  //     console.log("end", res.data)
  //     dispatch({ type: actions.RESERVATION_GET_DATA, payload: res.data });
  //     return res;
  //   } catch (err) {
  //     dispatch({ type: actions.RESERVATION_END_LOADING });
  //     console.log("hello RESERVATIONEror", err)
  //   }
  
  // }
  export const reservationGetData = (id) => async (dispatch) => {
    
    try {
      let userId = await AsyncStorage.getItem('userToken') || 'none';     
      // console.log(userId,"hhhhhhhhhh")
      // console.log("in reservations ")
      // let userId = await AsyncStorage.getItem('userToken') || 'none';     
      // console.log(userId,"hhhhhhhhhh")
      dispatch({ type: actions.RESERVATION_LOADING });
      const res = await reservationService('/reservation'+id, "get","",userId)
      // console.log("end", res.data)
      dispatch({ type: actions.RESERVATION_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.RESERVATION_END_LOADING });
      console.log("hello RESERVATIONEror", err)
    }
  
  }
  export const inviteeGetDataByRoom = (id) => async (dispatch) => {
   
    try {
      // console.log("in reservations ")
      dispatch({ type: actions.INVITEE_LOADING });
      let userId = await AsyncStorage.getItem('userToken') || 'none';   
    //  console.log(userId,"hhhhhhhhhh")
      const res = await reservationService('/invitees/'+id, "get","",userId)
      // console.log("end", res.data)
      dispatch({ type: actions.INVITEEBYROOM_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.INVITEE_END_LOADING });
      console.log("hello inviteeGetDataByRoomEror", err)
    }
  
  }
  export const roomDBGetDataByReservation = (id) => async (dispatch) => {
    try {
      // console.log("in reservations ")
      let userId = await AsyncStorage.getItem('userToken') || 'none';     
      // console.log(userId,"hhhhhhhhhh")
      dispatch({ type: actions.ROOMDB_LOADING });
      const res = await reservationService('/rooms/'+id, "get","",userId)
      // console.log("end", res.data)
      dispatch({ type: actions.ROOMDBBYRESERVATION_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.ROOMDB_END_LOADING });
      console.log("hello roomDBGetDataByReservationEror", err)
    }
  
  }
  export const hotelDBGetData = (reserv) => async (dispatch) => {
    try {
      // console.log("in reservations ")
      let userId = await AsyncStorage.getItem('userToken') || 'none';     
      // console.log(userId,"hhhhhhhhhh")
      dispatch({ type: actions.HOTELSDB_LOADING });
      const res = await reservationService('/hotel/'+id, "get","",userId)
      // console.log("end hotelDBPostData", res.data)
      dispatch({ type: actions.HOTELSDB_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.HOTELSDB_END_LOADING });
      console.log("hello RESERVATIONEror", err)
    }
  
  }
 