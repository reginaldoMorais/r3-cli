import React from 'react';

import { IntlProvider } from 'react-intl';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../../../../../Reducers';
import MenuComponent from '../Menu';

import AppLocale from '../../../../../lang';

Enzyme.configure({ adapter: new Adapter() });

describe('<Menu />', () => {
  let store;
  let mountComponet;

  beforeEach(() => {
    const currentAppLocale = AppLocale['en'];
    store = createStore(reducers, {});

    mountComponet = component => {
      return mount(
        <Provider store={store}>
          <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
            {component}
          </IntlProvider>
        </Provider>
      );
    };
  });

  it('First item of Menu rendered', () => {
    const component = mountComponet(
      <MenuComponent auth={store.getState().auth} menu={store.getState().menu} isOpen={false} />
    );

    expect(
      component
        .find('.menu-item span.nav-label')
        .first()
        .text()
    ).toEqual('Index');
  });

  it('Last item of Menu rendered', () => {
    const component = mountComponet(
      <MenuComponent auth={{ token: 'xxx' }} menu={store.getState().menu} isOpen={false} />
    );

    expect(
      component
        .find('.menu-item span.nav-label')
        .last()
        .text()
    ).toEqual('Log out');
  });
});
