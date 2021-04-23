import * as actions from "../actions/userTypes.js"

// export const indexGetData = (room) => async (dispatch) => {
//     try {
//       console.log("in indexGetData ")
//       dispatch({ type: actions.INDEX_LOADING });
//       dispatch({ type: actions.INDEX_GET_DATA, payload: room });
//       return "out of room ";
//     } catch (err) {
//       dispatch({ type: actions.INDEX_END_LOADING });
//       console.log("hello INDEXError", err)
//     }
  
//   }
  export const indexGetChildrens = (val) => async (dispatch) => {
    try {
      console.log("in indexGetChildrens ")
      dispatch({ type: actions.INDEX_LOADING });
      dispatch({ type: actions.INDEX_GET_CHILDDATA, payload: val });
      return "out of indexGetChildrens ";
    } catch (err) {
      dispatch({ type: actions.INDEX_END_LOADING });
      console.log("hello INDEXError", err)
    }
  
  }
  export const indexGetAdults = (val) => async (dispatch) => {
    try {
      console.log("in indexGetAdults ")
    //   dispatch({ type: actions.INDEX_LOADING });
      dispatch({ type: actions.INDEX_GET_ADULTDATA, payload: val });
      return "out of indexGetAdults ";
    } catch (err) {
    //   dispatch({ type: actions.INDEX_END_LOADING });
      console.log("hello INDEXError", err)
    }
  
  }
  export const indexGetEnfant = (val) => async (dispatch) => {
    try {
      console.log("in indexGetEnfant ")
      dispatch({ type: actions.INDEX_LOADING });
      dispatch({ type: actions.INDEX_GET_ENFANTDATA, payload: val });
      return "out of indexGetEnfant ";
    } catch (err) {
      dispatch({ type: actions.INDEX_END_LOADING });
      console.log("hello INDEXError", err)
    }
  
  }
  export const indexGetAges = (val) => async (dispatch) => {
    try {
      console.log("in indexGetages ")
      dispatch({ type: actions.INDEX_LOADING });
      dispatch({ type: actions.INDEX_GET_AGESDATA, payload: val });
      return "out of indexGetages ";
    } catch (err) {
      dispatch({ type: actions.INDEX_END_LOADING });
      console.log("hello INDEXError", err)
    }
  
  }
  
