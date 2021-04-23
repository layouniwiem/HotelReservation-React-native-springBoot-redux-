import * as actions from "../actions/userTypes"
const initialState = {
    data: null,
    availableRoomsErr: "",
    loading: true,
  };

  const availableRoomsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.AVAILABLEROOMS_LOADING:
          return {
            ...state,
            loading: true,
          };
        case actions.AVAILABLEROOMS_GET_DATA:
          return {
            ...state,
            data: action.payload,
            availableRoomsErr: "",
            loading: false
          };
        case actions.AVAILABLEROOMS_FAILURE:
          return {
            ...state,
            availableRoomsErr: "NO DATA FOUND",
            loading: false
          };
        case actions.AVAILABLEROOMS_END_LOADING:
          return {
            ...state,
            loading: false,
          };
        case actions.AVAILABLEROOMS_HOTELS:
          return {
            ...state,
            data: null,
            availableRoomsErr: "",
            loading: false
          };
          default:
            return state;
        }
  }
  export default availableRoomsReducer;