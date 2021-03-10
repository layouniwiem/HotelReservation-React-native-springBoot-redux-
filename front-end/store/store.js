import { createStore , combineReducers, applyMiddleware} from "redux";
import userReducer from "../reducers/userReducer"
import thunk from 'redux-thunk'
import rootReducer from "../reducers/rootReducer";
// const store = createStore(combineReducers({
//     userReducer
// }));
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;