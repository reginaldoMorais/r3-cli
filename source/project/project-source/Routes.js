import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* Containers / Components */
import Controller from './view/views/controller/ControllerContainer';

export default props => {
  return (
    <Switch>
      <Route key="all" path="*" component={Controller} />
    </Switch>
  );
};
