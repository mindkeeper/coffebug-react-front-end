import { combineReducers } from "redux";
import authsReducer from "./auths";
import { productsReducer } from "./products";
import { profileReducer } from "./profile";

const reducers = combineReducers({
  auths: authsReducer,
  product: productsReducer,
  profileProps: profileReducer,
});

export default reducers;
