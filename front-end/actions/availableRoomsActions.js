import { hotelService } from "../services/hotelService";
import * as actions from "../actions/userTypes.js"
export const availableRoomsGetAll = (hotel) => async (dispatch) => {
    try {
      console.log("in hotels ")
      dispatch({ type: actions.HOTELS_LOADING });
      const res = await hotelService('/hotelRoomAvailability', "post",hotel)
      console.log("end", res.data)
      dispatch({ type: actions.AVAILABLEROOMS_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.AVAILABLEROOMS_END_LOADING });
      console.log("hello AVAILABLEROOMSError", err)
    }
  
  }