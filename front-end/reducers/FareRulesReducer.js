import * as actions from "../actions/userTypes"
const initialState = {
    data: null,
    FareRulesErr: "",
    loading: true,
  };

  const FareRulesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FARERULES_LOADING:
          return {
            ...state,
            loading: true,
          };
        case actions.FARERULES_GET_DATA:
          return {
            ...state,
            data: action.payload,
            FareRulesErr: "",
            loading: false
          };
        case actions.FARERULES_FAILURE:
          return {
            ...state,
            FareRulesErr: "NO DATA FOUND",
            loading: false
          };
        case actions.FARERULES_END_LOADING:
          return {
            ...state,
            loading: false,
          };
        case actions.FARERULES_CLEAR:
          return {
            ...state,
            data: null,
            FareRulesErr: "",
            loading: false
          };
          default:
            return state;
        }
  }
  export default FareRulesReducer;