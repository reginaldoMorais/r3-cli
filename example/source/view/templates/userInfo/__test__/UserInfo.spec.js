import React from 'react';
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import UserInfoComponent from '../UserInfo';

Enzyme.configure({ adapter: new Adapter() });

describe('<UserInfo />', () => {
  it('Renders without crashing.', () => {
    const rendered = renderer.create(<UserInfoComponent />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
