import '../Imports';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/* Libs */

/* Containers / Components */
import Menu from 'Templates/menu/MenuContainer';
import Messages from 'Templates/Messages';
import Content from 'Templates/content/ContentContainer';
import Index from './index/IndexContainer';
import PageNotFound from './PageNotFound';

class Out extends Component {
  render() {
    return (
      <div className="out">
        <Menu />
        <Content>
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

export default Out;
