import * as actions from "../actions/userTypes"
const initialState = {
    data: null,
    cityDESTErr: "",
    loading: true,
  };

  const CityDestReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CITYDES_LOADING:
          return {
            ...state,
            loading: true,
          };
        case actions.CITYDES_GET_DATA:
          return {
            ...state,
            data: action.payload,
            cityDESTErr: "",
            loading: false
          };
        case actions.CITYDES_FAILURE:
          return {
            ...state,
            cityDESTErr: "NO DATA FOUND",
            loading: false
          };
        case actions.CITYDES_END_LOADING:
          return {
            ...state,
            loading: false,
          };
        case actions.CITYDES_CLEAR:
          return {
            ...state,
            data: null,
            cityDESTErr: "",
            loading: false
          };
          default:
            return state;
        }
  }
  export default CityDestReducer;