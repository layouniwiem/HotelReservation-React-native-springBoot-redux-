import { combineReducers } from "redux";
import  userReducer from "./userReducer"
import index from "./index";
import HotelReducer from "./HotelReducer";
import availableRoomsReducer from "./availableRoomsReducer"
import message from "../actions/messages";
const RootReducer = combineReducers({
  //ur store objects that u gonna use when getting data from your store with useSelector from any component 
    users: userReducer,
    hotels: HotelReducer,
    indexData:index,
    availableRooms:availableRoomsReducer,
  
});

export default RootReducer;