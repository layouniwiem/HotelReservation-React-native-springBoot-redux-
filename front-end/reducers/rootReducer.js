import { combineReducers } from "redux";
import  userReducer from "./userReducer"
import index from "./index";
import HotelReducer from "./HotelReducer";
import availableRoomsReducer from "./availableRoomsReducer"
import currentReducer from "./currentData";
import CityDestinationReducer from "./CityDestinationReducer ";
import cityReducer from "./CityReducer";
import HotelDBReducer from "./HotelDBReducer";

import reservationReducer from "./ReservationReducer";
import InviteeReducer from "./InviteeReducer";
import RoomDBReducer from "./roomDBReducer";
import CancellationReducer from "./CancellationReducer";
import FareRulesReducer from "./FareRulesReducer";

const RootReducer = combineReducers({
  //ur store objects that u gonna use when getting data from your store with useSelector from any component 
    users: userReducer,
    hotels: HotelReducer,
    indexData:index,
    availableRooms:availableRoomsReducer,
    currentData: currentReducer,
    cities: cityReducer,
    citiesDest: CityDestinationReducer,
    invitees:InviteeReducer,
    roomsDB:RoomDBReducer,
    reservations: reservationReducer,
    hotelDB: HotelDBReducer,
    cancellations:CancellationReducer,
    fareRules:FareRulesReducer
  
});

export default RootReducer;