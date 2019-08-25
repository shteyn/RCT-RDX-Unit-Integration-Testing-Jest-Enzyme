import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReduce from "./reducers";

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);

export const store = createStoreWithMiddleware(RootReduce);
