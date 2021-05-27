import * as actions from "../actions/userTypes.js"
import { cityDestService,cityService } from "../services/cityService";
export const citiesGetAll = () => async (dispatch) => {
    try {
      console.log("in cities ")
      dispatch({ type: actions.CITY_LOADING });
      const res = await cityService('/', "post")
      console.log("end", res.data)
      dispatch({ type: actions.CITY_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.CITY_END_LOADING });
      console.log("hello CitisError", err)
    }
  
  }
  export const citiesDestGetAll = (req) => async (dispatch) => {
    try {
      console.log("in cityDestService ")
      dispatch({ type: actions.CITY_LOADING });
      const res = await cityDestService('/', "post",req)
      console.log("end", res.data)
      dispatch({ type: actions.CITYDES_GET_DATA, payload: res.data });
      return res;
    } catch (err) {
      dispatch({ type: actions.CITY_END_LOADING });
      console.log("hello cityDestService",err)
    }
  
  }