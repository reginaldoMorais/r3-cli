module.exports = name => {
  const nameUpperCase = name.charAt(0).toUpperCase() + name.slice(1);
  return `import React from 'react';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reducers from '../../../../Reducers';

import ${nameUpperCase}Container from '../${nameUpperCase}Container';
import ${nameUpperCase}Component from '../${nameUpperCase}';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<${nameUpperCase}Container />', () => {
  let mountStore;

  beforeEach(() => {
    mountStore = component => {
      const store = createStore(reducers, {});
      return mount(<Provider store={store}>{component}</Provider>);
    };
  });

  it('Component must be conected with store.', () => {
    const wrapper = mountStore(<${nameUpperCase}Container />);
    const container = wrapper.find(${nameUpperCase}Container);
    const component = container.find(${nameUpperCase}Component);

    expect(component.text()).toBe('Hello World');
    expect(component.find('div').text()).toEqual('Hello World');
  });
});
`;
};
