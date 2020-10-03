import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/index";

const Store = () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return store;
};

export default Store;