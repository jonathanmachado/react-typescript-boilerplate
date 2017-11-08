import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Router, Route, Switch } from "react-router";
import store from './store';

import App from "./containers/App";
import history from "./utils/history";
import Login from "./containers/Login";
import Registration from "./containers/Registration";
import NotFound from "./containers/NotFound";

const normalize = require('normalize-css');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
