import { combineReducers } from "redux";
import  userReducer from "./userReducer"
import index from "./index";
import HotelReducer from "./HotelReducer";
import availableRoomsReducer from "./availableRoomsReducer"
import currentReducer from "./currentData";
import cityReducer from "./CityReducer";
import reservationReducer from "./ReservationReducer";
const RootReducer = combineReducers({
  //ur store objects that u gonna use when getting data from your store with useSelector from any component 
    users: userReducer,
    hotels: HotelReducer,
    indexData:index,
    availableRooms:availableRoomsReducer,
    currentData: currentReducer,
    cities: cityReducer,
    reservations: reservationReducer
  
});

export default RootReducer;