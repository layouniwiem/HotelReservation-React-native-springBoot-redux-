import * as actions from "../actions/userTypes.js"
export const getCurrentData = (val) => async (dispatch) => {
    try {
      console.log("in getCurrentData ")
      dispatch({ type: actions.CURRENTDATA_LOADING });
      dispatch({ type: actions.CURRENTDATA_GET_DATA, payload: val });
      return "out of getCurrentData ";
    } catch (err) {
      dispatch({ type: actions.INDEX_END_LOADING });
      console.log("hello getCurrentData Error", err)
    }
  
  }
  export const getCurrentHotel = (val) => async (dispatch) => {
    try {
      console.log("in getCurrentHotel ")
      dispatch({ type: actions.CURRENTDATA_LOADING });
      dispatch({ type: actions.CURRENTDATA_GET_HOTEL, payload: val });
      return "out of getCurrentHotel ";
    } catch (err) {
      dispatch({ type: actions.INDEX_END_LOADING });
      console.log("hello getCurrentHotel Error", err)
    }
  
  }
  export const getCurrentRooms = (val) => async (dispatch) => {
    try {
      console.log("in getCurrentRooms ")
      dispatch({ type: actions.CURRENTDATA_LOADING });
      dispatch({ type: actions.CURRENTDATA_GET_ROOMS, payload: val });
      return "out of getCurrentRooms ";
    } catch (err) {
      dispatch({ type: actions.INDEX_END_LOADING });
      console.log("hello getCurrentRooms Error", err)
    }
  
  }