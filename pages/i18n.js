import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ruTranslation from '../locales/ru.json';
import kgTranslation from '../locales/kg.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ruTranslation },
      kg: { translation: kgTranslation },
    },
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
