import React, { Component } from 'react';

/* Libs */
import { Switch, Redirect, Route } from 'react-router-dom';
import getEnviromentConfig from '../../../config';
import AppLocale from '../../../lang';

/* Containers / Components */
import { IntlProvider } from 'react-intl';
import In from '../templates/In';
import Out from '../templates/Out';

class Controller extends Component {
  constructor(props) {
    super(props);
    this.configuration = getEnviromentConfig();
  }

  routeIn() {
    return (
      <Switch>
        <Route key="home-in" path="/in/*" component={In} />
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
    const { location, locale } = this.props;
    const currentAppLocale = AppLocale[locale];
    const pathname = location.pathname.split('/')[1];

    return (
      <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
        {pathname == 'in' ? this.routeIn() : this.routeOut()}
      </IntlProvider>
    );
  }
}

Controller.propTypes = {};

export default Controller;
