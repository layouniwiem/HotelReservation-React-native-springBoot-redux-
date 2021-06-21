import * as actions from "../actions/userTypes"
const initialState = {
    data: null,
    inviteeErr: "",
    loading: true,
    roomsByreservation:null,
  };

  const RoomDBReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ROOMDB_LOADING:
          return {
            ...state,
            loading: true,
          };
        case actions.ROOMDB_GET_DATA:
          return {
            ...state,
            data: action.payload,
            inviteeErr: "",
            loading: false
          };
          case actions.ROOMDBBYRESERVATION_GET_DATA:
            return {
              ...state,
              roomsByreservation: action.payload,
              inviteeErr: "",
              loading: false
            };
        case actions.ROOMDB_FAILURE:
          return {
            ...state,
            inviteeErr: "NO DATA FOUND",
            loading: false
          };
        case actions.ROOMDB_END_LOADING:
          return {
            ...state,
            loading: false,
          };
        case actions.ROOMDB_CLEAR:
          return {
            ...state,
            data: null,
            inviteeErr: "",
            loading: false
          };
          default:
            return state;
        }
  }
  export default RoomDBReducer;