const initialState = {
  data: null,
  userErr: "",
  loading: false,
  userToken: null,
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
      case actions.LOGIN_SUCCESS:
        return {
            ...state,
            data: action.payload,
            userToken: action.payload.jwt,
            loading: false,
        };
        case 'RETREIVE_TOKEN':
          return {
            ...state,
            userToken: action.payload,
            loading: false,
          };
      case 'LOGOUT':
        return {
          ...state,
          data: null,
          userToken: null,
          loading: false,
        };
      case 'REGISTER':
        return {
          ...state,
          data: action.payload,
          // userToken: action.token,
          loading: false,
        };
    default:
      return state;
  }
};

export default userReducer;
// const initialState = {
//   user: null,
//   current_user: null,
//   isAuthenticated: false,
//   signUpErr: "",
//   signInErr: "",
//   signUpSuccess: "",
//   loading: false,
// };

// const auth = (state = initialState, action) => {
//   switch (action.type) {
//     case "AUTH_LOADING":
//       return {
//         ...state,
//         loading: true,
//       };
//     case "SIGNUP_USER_SUCCESS":
//       return { ...state, signUpSuccess: action.payload.message, signUpErr: "" ,loading: false};
//     case "SIGNUP_USER_FAILURE":
//       return { ...state, signUpErr: action.payload.message, signUpSuccess: "" ,loading: false};
//     case "SET_CURRENT_USER_SUCCESS":
//       return { ...state, current_user: action.payload ,loading: false};

//     // Sign in cases
//     case "SIGNIN_USER_SUCCESS":
//       return {
//         ...state,
//         user: action.payload,
//         isAuthenticated: true,
//         signInErr: "",loading: false
//       };
//     case "SIGNIN_USER_FAILURE":
//       return { ...state, signInErr: action.payload.error,loading: false };
//     case "LOGOUT_USER_SUCCESS":
//       return {
//         user: null,
//         current_user: null,
//         isAuthenticated: false,
//         signUpErr: "",
//         signInErr: "",
//         signUpSuccess: "",
//         loading: false
//       };
//     case "AUTH_END_LOADING":
//       return {
//         ...state,
//         loading: false
//       };
//     default:
//       return state;
//   }
// };

// export default auth;