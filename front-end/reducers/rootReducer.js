import { combineReducers } from "redux";
import  userReducer from "./userReducer"
import authReducer from "./authReducer"
import message from "../actions/messages";
const RootReducer = combineReducers({
  //ur store objects that u gonna use when getting data from your store with useSelector from any component 
    users: userReducer,
  // auth:authReducer,
  
});

export default RootReducer;