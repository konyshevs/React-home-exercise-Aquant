import { createStore } from "redux";
import rootReducer from "../reducers/root-reducer";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
