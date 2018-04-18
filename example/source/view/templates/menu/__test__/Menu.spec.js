import React from 'react';

import MenuComponent from '../Menu';

import { createStore } from 'redux';
import reducers from '../../../../Reducers';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Menu />', () => {
  let store;

  beforeEach(() => {
    store = createStore(reducers, {});
  });

  it('First item of Menu rendered', () => {
    const component = shallow(<MenuComponent menu={store.getState().menu} />);

    expect(
      component
        .find('.menu-item span.nav-label')
        .first()
        .text()
    ).toEqual('Index');
  });

  it('Last item of Menu rendered', () => {
    const component = shallow(<MenuComponent menu={store.getState().menu} />);

    expect(
      component
        .find('.menu-item span.nav-label')
        .last()
        .text()
    ).toEqual('Log out');
  });
});
