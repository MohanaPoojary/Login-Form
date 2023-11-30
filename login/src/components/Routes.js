// Routes.js
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
};

export default Routes;
