import { addLocaleData } from 'react-intl';
import enLang from './entries/en-US';
import esLang from './entries/es-ES';
import brLang from './entries/pt-BR';

const AppLocale = {
  en: enLang,
  es: esLang,
  br: brLang,
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.es.data);
addLocaleData(AppLocale.br.data);

export default AppLocale;
