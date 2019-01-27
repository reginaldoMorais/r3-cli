import '../Imports';

import React, { Component } from 'react';

/* Libs */
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';

/* Containers / Components */
import PageNotFound from './PageNotFound';
import Messages from '../components/Messages';
import Header from '../components/header/HeaderContainer';
import Menu from '../components/menu/MenuContainer';
import Content from '../components/content/ContentContainer';
import Footer from '../components/Footer';

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
