module.exports = name => {
  const nameUpperCase = name.charAt(0).toUpperCase() + name.slice(1);
  return `import React from 'react';
import renderer from 'react-test-renderer';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ${nameUpperCase}Component from '../${nameUpperCase}';

Enzyme.configure({ adapter: new Adapter() });

describe('<${nameUpperCase} />', () => {
  it('Renders without crashing.', () => {
    const rendered = renderer.create(<${nameUpperCase}Component />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
`;
};
