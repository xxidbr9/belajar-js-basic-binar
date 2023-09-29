import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";

const appStore = () => {
  const middleWare = [];
  const middlewareEnhancer = applyMiddleware(...middleWare);
  const composedMiddleware = composeWithDevTools(middlewareEnhancer);
  return createStore(rootReducer, composedMiddleware);
};

const store = appStore();

export default store;
