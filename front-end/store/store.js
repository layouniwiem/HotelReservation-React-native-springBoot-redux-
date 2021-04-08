// import { createStore , combineReducers, applyMiddleware} from "redux";
// import userReducer from "../reducers/userReducer"
// import thunk from 'redux-thunk'
// import rootReducer from "../reducers/rootReducer";
// // const store = createStore(combineReducers({
// //     userReducer
// // }));
// const store = createStore(rootReducer,applyMiddleware(thunk));
// export default store;
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
