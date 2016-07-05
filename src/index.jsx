// import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import createRoute from './routes';
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const baseHistory = browserHistory;
const routingMiddleware = routerMiddleware(baseHistory);

const enhancer = compose(
  applyMiddleware(routingMiddleware, logger, thunkMiddleware)
);

const store = createStore(
  combineReducers( { rootReducer, routing: routerReducer } ),
  enhancer
);

const history = syncHistoryWithStore(baseHistory, store);
const routes = createRoute(store);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>,
    document.querySelectorAll('.main')[0]
);
