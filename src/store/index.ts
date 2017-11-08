import { createStore, applyMiddleware, compose, Store } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
//import Config from '../config/config';
import rootReducer, { RootState } from '../reducers';

const middlewares = [];

// if (Config.dev() === true) {
// }
if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger());
}

middlewares.push(thunk, promise());

const store = createStore(
  rootReducer,
  compose(
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  )
) as Store<RootState>;


let module:any;
if (module.hot) {
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers');
    store.replaceReducer(nextReducer);
  });
}

export default store;
