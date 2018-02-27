import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import getEnviromentConfig from 'Config';

/* Containers / Components */
import In from '../In';
import Out from '../Out';

class Controller extends Component {
  constructor(props) {
    super(props);
    this.configuration = getEnviromentConfig();
  }

  routeIn() {
    return (
      <Switch>
        <Route key="home-in" path="*" component={In} />
      </Switch>
    );
  }

  routeOut() {
    return (
      <Switch>
        <Route key="home-out" path="*" component={Out} />
      </Switch>
    );
  }

  routeFail() {
    return (
      <Switch>
        <Redirect exact from="*" to="/" />
      </Switch>
    );
  }

  render() {
    return this.routeOut();
  }
}

export default Controller;
