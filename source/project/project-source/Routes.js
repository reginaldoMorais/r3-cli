import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Controller from './views/view/controller/ControllerContainer';

export default props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route key="all" path="*" component={Controller} />
      </Switch>
    </BrowserRouter>
  );
};
