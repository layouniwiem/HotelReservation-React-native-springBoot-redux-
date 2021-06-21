import * as actions from "../actions/userTypes"
const initialState = {
    data: null ,
    hotelErr: "",
    loading: true,
  };

  const HotelDBReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.HOTELSDB_LOADING:
          return {
            ...state,
            loading: true,
          };
        case actions.HOTELSDB_GET_DATA:
          return {
            ...state,
            data: action.payload,
            hotelErr: "",
            loading: false
          };
        case actions.HOTELSDB_FAILURE:
          return {
            ...state,
            hotelErr: "NO DATA FOUND",
            loading: false
          };
        case actions.HOTELSDB_END_LOADING:
          return {
            ...state,
            loading: false,
          };
        case actions.CLEAR_HOTELSDB:
          return {
            ...state,
            data: null,
            hotelErr: "",
            loading: false
          };
          default:
            return state;
        }
  }
  export default HotelDBReducer;