import React from 'react';
import renderer from 'react-test-renderer';

import UserInfoComponent from '../UserInfo';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<UserInfo />', () => {
  it('Renders without crashing.', () => {
    const rendered = renderer.create(<UserInfoComponent />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
