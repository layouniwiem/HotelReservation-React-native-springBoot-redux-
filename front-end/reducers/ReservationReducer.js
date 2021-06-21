import * as actions from "../actions/userTypes"
const initialState = {
    data: null,
    ReservationErr: "",
    loading: true,
    AllReservations:null,
  };

  const ReservationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.RESERVATION_LOADING:
          return {
            ...state,
            loading: true,
          };
        case actions.RESERVATION_GET_DATA:
          return {
            ...state,
            data: action.payload,
            ReservationErr: "",
            loading: false
          };
        case actions.RESERVATION_FAILURE:
          return {
            ...state,
            ReservationErr: "NO DATA FOUND",
            loading: false
          };
        case actions.RESERVATION_END_LOADING:
          return {
            ...state,
            loading: false,
          };
        case actions.RESERVATION_CLEAR:
          return {
            ...state,
            data: null,
            ReservationErr: "",
            loading: false
          };
          default:
            return state;
        }
  }
  export default ReservationReducer;