import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './Language/en.json';
import itTranslations from './Language/it.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  it: {
    translation: itTranslations,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;