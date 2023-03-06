import { combineReducers } from "redux";

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzasReducer } from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";
import { registerReducer } from "./reducers/registerReducer";

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer: cartReducer,
  registerReducer: registerReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const intialState = {
  cartReducer: {
    cartItems: cartItems,
  },
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  intialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
