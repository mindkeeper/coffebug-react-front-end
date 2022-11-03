import rpm from "redux-promise-middleware";
import logger from "redux-logger";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducers from "./reducer";
const middleware = applyMiddleware(rpm, logger);
const store = createStore(reducers, middleware);

export default store;
