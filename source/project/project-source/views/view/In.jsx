import '../Imports';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/* Libs */

/* Containers / Components */
import Messages from 'Templates/Messages';
import Header from 'Templates/header/HeaderContainer';
import Menu from 'Templates/menu/MenuContainer';
import Content from 'Templates/content/ContentContainer';
import Footer from 'Templates/Footer';
import Index from './index/IndexContainer';
import PageNotFound from './PageNotFound';

class In extends Component {
  render() {
    return (
      <div className="in">
        <Menu />
        <Header match={this.props.match} />
        <Content fluid={true} className="page-in">
          <Switch>
            <Route exact key="index" path="/" component={Index} />
            <Route exact key="index-not-found" path="/*" component={PageNotFound} />
            <Route exact key="index-component" path="*" component={Index} />
          </Switch>
        </Content>
        <Footer />
        <Messages />
      </div>
    );
  }
}

export default In;
