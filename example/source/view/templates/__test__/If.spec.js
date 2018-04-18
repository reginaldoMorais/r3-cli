import React from 'react';

import IfComponent from '../If';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<If />', () => {
  it('Render children if test equals true.', () => {
    const wrapper = shallow(
      <IfComponent test={true}>
        <div>Hello</div>
      </IfComponent>
    );
    expect(wrapper.text()).toEqual('Hello');
  });

  it('Render null if test equals false.', () => {
    const wrapper = shallow(
      <IfComponent test={false}>
        <div>Hello</div>
      </IfComponent>
    );
    expect(wrapper.get(0)).toBeNull();
  });
});
