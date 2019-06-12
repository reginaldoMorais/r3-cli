import React from 'react';

import { mountWithIntl, loadTranslationObject } from 'enzyme-react-intl';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import IndexComponent from '../Index';

import AppLocale from '../../../../../lang';

Enzyme.configure({ adapter: new Adapter() });

describe('<Index />', () => {
  beforeEach(() => {
    const currentAppLocale = AppLocale['en'];
    loadTranslationObject(currentAppLocale.messages);
  });

  it('Renders without crashing.', () => {
    const component = mountWithIntl(<IndexComponent />);
    expect(component).toBeTruthy();
  });

  it('H1 rendered.', () => {
    const component = mountWithIntl(<IndexComponent />);

    expect(component.find('h1').text()).toEqual('R3-CLI');
    expect(component.text()).toBe(
      'R3-CLIReact + Redux + Router GeneratorThank you for using R3-CLI to generate your project.'
    );
  });
});
