import * as actions from "../actions/userTypes"
const initialState = {
    data: null,
    inviteeErr: "",
    loading: true,
    InviteesByRoom:null
  };

  const InviteeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INVITEE_LOADING:
          return {
            ...state,
            loading: true,
          };
        case actions.INVITEE_GET_DATA:
          return {
            ...state,
            data: action.payload,
            inviteeErr: "",
            loading: false
          };
          case actions.INVITEEBYROOM_GET_DATA:
            return {
              ...state,
              InviteesByRoom: action.payload,
              inviteeErr: "",
              loading: false
            };
        case actions.INVITEE_FAILURE:
          return {
            ...state,
            inviteeErr: "NO DATA FOUND",
            loading: false
          };
        case actions.INVITEE_END_LOADING:
          return {
            ...state,
            loading: false,
          };
        case actions.INVITEE_CLEAR:
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
  export default InviteeReducer;