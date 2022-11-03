import { combineReducers } from "redux";
import authsReducer from "./auths";

const reducers = combineReducers({
  auths: authsReducer,
});

export default reducers