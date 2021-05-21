import * as actions from "../actions/userTypes"
const initialState = {
    data: null,
    cityErr: "",
    loading: true,
  };

  const CityReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CITY_LOADING:
          return {
            ...state,
            loading: true,
          };
        case actions.CITY_GET_DATA:
          return {
            ...state,
            data: action.payload,
            cityErr: "",
            loading: false
          };
        case actions.CITY_FAILURE:
          return {
            ...state,
            cityErr: "NO DATA FOUND",
            loading: false
          };
        case actions.CITY_END_LOADING:
          return {
            ...state,
            loading: false,
          };
        case actions.CITY_CLEAR:
          return {
            ...state,
            data: null,
            cityErr: "",
            loading: false
          };
          default:
            return state;
        }
  }
  export default CityReducer;