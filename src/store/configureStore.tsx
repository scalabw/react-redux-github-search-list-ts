import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";
import DevTools from "../containers/DevTools";
import thunkMiddleware from "redux-thunk";

const loggerMiddleware = createLogger();

const configureStore = (preloadedState?: any) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunkMiddleware, loggerMiddleware),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};
export default configureStore;
