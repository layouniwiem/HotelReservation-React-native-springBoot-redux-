import { hotelService } from "../services/hotelService";
import * as actions from "../actions/userTypes.js"
export const hotelsGetAll = (hotel) => async (dispatch) => {
    try {
      console.log("in hotels ")
      dispatch({ type: actions.HOTELS_LOADING });
      const res = await hotelService('/', "post",hotel)
      console.log("end", res.data)
      dispatch({ type: actions.HOTELS_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.HOTELS_END_LOADING });
      console.log("hello HOTELSError", err)
    }
  
  }