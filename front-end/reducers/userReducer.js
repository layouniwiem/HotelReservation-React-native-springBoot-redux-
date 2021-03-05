const initialState = {
  data: null,
  userErr: "",
  loading: false,
};
import * as actions from "../actions/userTypes"
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.USER_GET_DATA:
      return {
        ...state,
        data: action.payload,
        userErr: "",
        loading: false
      };
    case actions.USER_FAILURE:
      return {
        ...state,
        userErr: "NO DATA FOUND",
        loading: false
      };
    case actions.USER_END_LOADING:
      return {
        ...state,
        loading: false,
      };
    case actions.CLEAR_USER:
      return {
        ...state,
        data: null,
        userErr: "",
        loading: false
      };
    default:
      return state;
  }
};

export default userReducer;