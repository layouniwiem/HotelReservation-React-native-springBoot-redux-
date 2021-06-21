import { hotelService } from "../services/hotelService";
import * as actions from "../actions/userTypes.js"
export const FareRulesGetAll = (hotel) => async (dispatch) => {
    try {
      console.log("in hotels ")
      dispatch({ type: actions.FARERULES_LOADING });
      const res = await hotelService('/availableAndPrice', "post",hotel)
      console.log("end", res.data)
      dispatch({ type: actions.FARERULES_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.FARERULES_END_LOADING });
      console.log("hello AVAILABLEROOMSError", err)
    }
  
  }
  export const CancellationGetAll = (hotel) => async (dispatch) => {
    try {
      console.log("in hotels ")
      dispatch({ type: actions.CANCELLATION_LOADING });
      const res = await hotelService('/cancelPolicies', "post",hotel)
      console.log("end", res.data)
      dispatch({ type: actions.CANCELLATION_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.CANCELLATION_END_LOADING });
      console.log("hello AVAILABLEROOMSError", err)
    }
  
  }