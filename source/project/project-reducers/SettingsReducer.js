const defaultLocale = `en`;
const localeOptions = [
  { id: 'en', name: 'English' },
  { id: 'es', name: 'Español' },
  { id: 'br', name: 'Português do Brasil' },
];
export const CHANGE_LOCALE = 'CHANGE_LOCALE';

let INITIAL_STATE = {
  locale: 'en',
};

if (typeof localStorage !== 'undefined') {
  INITIAL_STATE = {
    locale:
      localStorage.getItem('currentLanguage') &&
      localeOptions.filter(x => x.id == localStorage.getItem('currentLanguage')).length > 0
        ? localStorage.getItem('currentLanguage')
        : defaultLocale,
  };
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return { ...state, locale: action.payload };

    default:
      return { ...state };
  }
};
