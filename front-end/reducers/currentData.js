const initialState = {
    data: null,
    hotel:null,
    rooms:null,
    Err: "",
    loading: false,
  };
  import * as actions from "../actions/userTypes"
const currentReducer =(state = initialState, action)=> {
    switch (action.type) {
        case actions.CURRENTDATA_LOADING:
          return {
            ...state,
            loading: true,
          };
        case actions.CURRENTDATA_GET_DATA:
          return {
            ...state,
            data: action.payload,
            Err: "",
            loading: false
          };
          case actions.CURRENTDATA_GET_HOTEL:
            return {
              ...state,
              hotel: action.payload,
              Err: "",
              loading: false
            };
            case actions.CURRENTDATA_GET_ROOMS:
                return {
                  ...state,
                  rooms: action.payload,
                  Err: "",
                  loading: false
                };
        case actions.CURRENTDATA_FAILURE:
          return {
            ...state,
            Err: "NO DATA FOUND",
            loading: false
          };
        case actions.CURRENTDATA_END_LOADING:
          return {
            ...state,
            loading: false,
          };
        case actions.CLEAR_USER:
          return {
            ...state,
            data: null,
            Err: "",
            loading: false
          };
          
        default:
          return state;
      }
    };
export default currentReducer