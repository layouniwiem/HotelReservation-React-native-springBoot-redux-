import * as actions from "../actions/userTypes"
const initialState = {
    data: null,
    CancellationErr: "",
    loading: true,
  };

  const CancellationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CANCELLATION_LOADING:
          return {
            ...state,
            loading: true,
          };
        case actions.CANCELLATION_GET_DATA:
          return {
            ...state,
            data: action.payload,
            CancellationErr: "",
            loading: false
          };
        case actions.CANCELLATION_FAILURE:
          return {
            ...state,
            CancellationErr: "NO DATA FOUND",
            loading: false
          };
        case actions.CANCELLATION_END_LOADING:
          return {
            ...state,
            loading: false,
          };
        case actions.CANCELLATION_CLEAR:
          return {
            ...state,
            data: null,
            CancellationErr: "",
            loading: false
          };
          default:
            return state;
        }
  }
  export default CancellationReducer;