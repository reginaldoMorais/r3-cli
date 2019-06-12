import React from 'react';
import { IntlProvider } from 'react-intl';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../../../../../Reducers';
import IndexContainer from '../IndexContainer';
import IndexComponent from '../Index';

import AppLocale from '../../../../../lang';

Enzyme.configure({ adapter: new Adapter() });

describe('<IndexContainer />', () => {
  let mountWithStore;

  beforeEach(() => {
    const currentAppLocale = AppLocale['en'];

    mountWithStore = component => {
      const store = createStore(reducers, {});
      return mount(
        <Provider store={store}>
          <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
            {component}
          </IntlProvider>
        </Provider>
      );
    };
  });

  it('Component must be conected with store. H1 rendered.', () => {
    const wrapper = mountWithStore(<IndexContainer />);
    const container = wrapper.find(IndexContainer);
    const component = container.find(IndexComponent);

    expect(component.find('h1').text()).toEqual('R3-CLI');
  });

  it('Component must be conected with store. H1 rendered.', () => {
    const wrapper = mountWithStore(<IndexContainer />);
    const container = wrapper.find(IndexContainer);
    const component = container.find(IndexComponent);

    expect(component.text()).toBe(
      'R3-CLIReact + Redux + Router GeneratorThank you for using R3-CLI to generate your project.'
    );
  });
});
