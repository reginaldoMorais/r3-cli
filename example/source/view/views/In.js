import '../Imports';

import React, { Component } from 'react';

/* Libs */
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';

/* Containers / Components */
import PageNotFound from './PageNotFound';
import Messages from '../templates/Messages';
import Header from '../templates/header/HeaderContainer';
import Menu from '../templates/menu/MenuContainer';
import Content from '../templates/content/ContentContainer';
import Footer from '../templates/Footer';

class In extends Component {
  render() {
    return (
      <div className="page in">
        <Menu />
        <Header match={this.props.match} />
        <Content fluid={true} className="page-in page-wrapper">
          <Switch>
            <Route exact key="inner-not-found" path="/in/*" component={PageNotFound} />
          </Switch>
        </Content>
        <Footer />
        <Messages />
        <ScrollToTop showUnder={160}>
          <span className="scrollToTop">
            <i className={`fa fa-arrow-up`} />
          </span>
        </ScrollToTop>
      </div>
    );
  }
}

In.propTypes = {};

export default In;
