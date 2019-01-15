import React from 'react';

/* Libs */
import { Switch, Route } from 'react-router-dom';

/* Containers / Components */
import Controller from './views/web/controller/ControllerContainer';

export default props => {
  return (
    <Switch>
      <Route key="all" path="*" component={Controller} />
    </Switch>
  );
};
