import React from 'react';
import { mount, shallow } from 'enzyme';
import { IntlProvider, intlShape } from 'react-intl';

import AppLocale from '../../../lang';

const currentAppLocale = AppLocale['en'];

// Create IntlProvider to retrieve React Intl context
const intlProvider = new IntlProvider(currentAppLocale, {});
const { intl } = intlProvider.getChildContext();

// `intl` prop is required when using injectIntl HOC
const nodeWithIntlProp = node => React.cloneElement(node, { intl });

// shallow() with React Intl context
export const shallowWithIntl = (node, { context, ...options } = {}) => {
  return shallow(nodeWithIntlProp(node), {
    ...options,
    context: {
      ...context,
      intl,
    },
  });
};
// mount() with React Intl context
export const mountWithIntl = (node, { context, childContextTypes, ...options } = {}) => {
  return mount(nodeWithIntlProp(node), {
    ...options,
    context: {
      ...context,
      intl,
    },
    childContextTypes: {
      intl: intlShape,
      ...childContextTypes,
    },
  });
};
