import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

export default function configureStore(preloadedState) {
  const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })) ||
    compose;
  const sagaMiddleware = createSagaMiddleware();
  const middlewareEnhancers = applyMiddleware(sagaMiddleware);

  const composedEnhanced = composeEnhancers(middlewareEnhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhanced);

  sagaMiddleware.run(rootSaga);

  return store;
}
