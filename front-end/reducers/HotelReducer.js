import * as actions from "../actions/userTypes"
const initialState = {
    data: null,
    hotelErr: "",
    loading: true,
  };

  const HotelReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.HOTELS_LOADING:
          return {
            ...state,
            loading: true,
          };
        case actions.HOTELS_GET_DATA:
          return {
            ...state,
            data: action.payload,
            hotelErr: "",
            loading: false
          };
        case actions.HOTELS_FAILURE:
          return {
            ...state,
            hotelErr: "NO DATA FOUND",
            loading: false
          };
        case actions.HOTELS_END_LOADING:
          return {
            ...state,
            loading: false,
          };
        case actions.CLEAR_HOTELS:
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
  export default HotelReducer;