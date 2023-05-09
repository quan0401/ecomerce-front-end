import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { counterReducer } from "./reducers/cartReducers";
import { userRegisterLoginReducer } from "./reducers/userReducers";

const userInfoLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : sessionStorage.getItem("userInfo")
  ? JSON.parse(sessionStorage.getItem("userInfo"))
  : {};

const reducer = combineReducers({
  cart: counterReducer,
  userRegisterLogin: userRegisterLoginReducer,
});

const initialValue = {
  cart: { value: 1 },
  userRegisterLogin: { userInfo: { ...userInfoLocalStorage } },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialValue,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
