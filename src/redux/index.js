import rpm from "redux-promise-middleware";
import logger from "redux-logger";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducers from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const middleware = applyMiddleware(rpm, logger);
const store = createStore(reducers, middleware);

export default store;
