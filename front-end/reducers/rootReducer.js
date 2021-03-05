import { combineReducers } from "redux";
import  userReducer from "./userReducer"
import authReducer from "./authReducer"
const RootReducer = combineReducers({
    usersReducer: userReducer,
   // auth:authReducer
});

export default RootReducer;