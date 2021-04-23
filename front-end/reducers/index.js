import * as actions from "../actions/userTypes"
const initialState = {
    // data: null,
    nbAdult:1,
    nbChildren:0,
    nbInfant:0,
    childrenAgeList:[],
    indexErr: "",
    loading: false,
  //   rooms: [{
  //     nbAdult:null,
  //     nbChildren:null,
  //     nbInfant:null,
  //     childrenAgeList:[]
  // }],
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
       
            case actions.INDEX_LOADING:
              return {
                ...state,
                loading: true,
              };
            // case actions.INDEX_GET_DATA:
            //   return {
            //     ...state,
            //     data: action.payload,
            //     indexErr: "",
            //     loading: false
            //   };
            case actions.INDEX_FAILURE:
              return {
                ...state,
                indexErr: "NO DATA FOUND",
                loading: false
              };
            case actions.INDEX_END_LOADING:
              return {
                ...state,
                loading: false,
              };
              case actions.INDEX_GET_ADULTDATA:
                return{
                  ...state,
                  nbAdult: action.payload,
                  indexErr: "",
                  loading: false
                }
            case actions.CLEAR_INDEX:
              return {
                ...state,
                data: null,
                indexErr: "",
                loading: false
              };
             
              case actions.INDEX_GET_ENFANTDATA:
                return{
                  ...state,
                  nbInfant: action.payload,
                  indexErr: "",
                  loading: false
                }
                case actions.INDEX_GET_AGESDATA:
                  return{
                    ...state,
                    childrenAgeList: action.payload,
                    indexErr: "",
                    loading: false
                  }
                  case actions.INDEX_GET_CHILDDATA:
                    return{
                      ...state,
                      nbChildren: action.payload,
                      indexErr: "",
                      loading: false
                    }
              default:
                return state;
            
    }
}

export default reducer