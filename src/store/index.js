import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/userReducer";
import alertReducer from "./reducers/alertReducer";

const middleware = applyMiddleware(thunk);
const composedEnhancers = composeWithDevTools(middleware);

const store = createStore(
  combineReducers({ userReducer, alertReducer }),
  composedEnhancers
);

export default store;
