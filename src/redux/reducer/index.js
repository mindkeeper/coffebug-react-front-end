import { combineReducers } from "redux";
import authsReducer from "./auths";
import { getDetailProductReducer } from "./getDetailproduct";
import { getPromosReducer } from "./getPromos";
import productsReducer from "./products";
import { profileReducer } from "./profile";
import transactionReducer from "./transaction";

const reducers = combineReducers({
  auths: authsReducer,
  products: productsReducer,
  users: profileReducer,
  getDetailProduct: getDetailProductReducer,
  getPromos: getPromosReducer,
  transaction: transactionReducer,
});

export default reducers;
