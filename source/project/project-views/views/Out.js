import '../Imports';

import React, { Component } from 'react';

/* Libs */
import { Switch, Route } from 'react-router-dom';

/* Containers / Components */
import Index from './pages/index/IndexContainer';
import PageNotFound from './PageNotFound';
import Menu from '../templates/menu/MenuContainer';
import Messages from '../templates/Messages';
import Content from '../templates/content/ContentContainer';

class Out extends Component {
  render() {
    return (
      <div className="page out">
        <Menu showUserInfo={false} />
        <Content className="page-out page-wrapper">
          <Switch>
            <Route exact key="index" path="/" component={Index} />
            <Route exact key="index-not-found" path="/*" component={PageNotFound} />
            <Route exact key="index-component" path="*" component={Index} />
          </Switch>
        </Content>
        <Messages />
      </div>
    );
  }
}

Out.propTypes = {};

export default Out;
