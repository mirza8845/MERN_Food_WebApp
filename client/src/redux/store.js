import { combineReducers } from "redux";

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzasReducer } from "./reducers/pizzaReducer";

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
});

const intialState = {};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  intialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
