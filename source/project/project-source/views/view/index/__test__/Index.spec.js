import React from 'react';
import renderer from 'react-test-renderer';

import IndexComponent from '../Index';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Index />', () => {
  it('Renders without crashing.', () => {
    const rendered = renderer.create(<IndexComponent />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('H1 rendered.', () => {
    const component = shallow(<IndexComponent />);
    expect(component.find('h1').text()).toEqual('Hello World');
  });
});
