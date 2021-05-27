import * as actions from "../actions/userTypes";
const initialState = {
    nbAdult:1,
    nbChildren:0,
    nbInfant:0,
    childrenAgeList:[],
    countryCode:"",
    Country:"",
    
    indexErr: "",
    loading: false,
    rooms: [{
      nbAdult:1,
      nbChildren:0,
      nbInfant:0,
      childrenAgeList:[]
  }],
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
       
            case actions.INDEX_LOADING:
              return {
                ...state,
                loading: true,
              };
            case actions.INDEXCOUNTRY_GET_DATA:
              return {
                ...state,
                country: action.payload,
                indexErr: "",
                loading: false
              };
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
                case actions.INDEX_GET_COUNTRY:
                return{
                  ...state,
                  countryCode: action.payload,
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
                    case actions.INDEX_GET_ROOMDATA:
                      return{
                        ...state,
                          rooms:action.payload,
                          indexErr: "",
                          loading: false
                      }
              default:
                return state;
            
    }
}

export default reducer