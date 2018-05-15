import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../../../../../Reducers';
import IndexContainer from '../IndexContainer';
import IndexComponent from '../Index';

Enzyme.configure({ adapter: new Adapter() });

describe('<IndexContainer />', () => {
  let mountStore;

  beforeEach(() => {
    mountStore = component => {
      const store = createStore(reducers, {});
      return mount(<Provider store={store}>{component}</Provider>);
    };
  });

  it('Component must be conected with store. H1 rendered.', () => {
    const wrapper = mountStore(<IndexContainer />);
    const container = wrapper.find(IndexContainer);
    const component = container.find(IndexComponent);

    expect(component.text()).toBe('Hello World');
    expect(component.find('h1').text()).toEqual('Hello World');
  });
});
