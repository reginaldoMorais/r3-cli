import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../../../Reducers';

import UserInfoContainer from '../UserInfoContainer';
import UserInfoComponent from '../UserInfo';

Enzyme.configure({ adapter: new Adapter() });

describe('<UserInfoContainer />', () => {
  let mountStore;

  beforeEach(() => {
    mountStore = component => {
      const store = createStore(reducers, {});
      return mount(<Provider store={store}>{component}</Provider>);
    };
  });

  it('Component must be conected with store. H1 rendered.', () => {
    const wrapper = mountStore(<UserInfoContainer />);
    const container = wrapper.find(UserInfoContainer);
    const component = container.find(UserInfoComponent);

    expect(component.text()).toBe('User name');
  });
});
