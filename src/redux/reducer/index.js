import { combineReducers } from "redux";
import authsReducer from "./auths";
import { getDetailProductReducer } from "./getDetailproduct";
import { productsReducer } from "./products";
import { profileReducer } from "./profile";

const reducers = combineReducers({
  auths: authsReducer,
  product: productsReducer,
  profileProps: profileReducer,
  getDetailProduct: getDetailProductReducer,
});

export default reducers;
