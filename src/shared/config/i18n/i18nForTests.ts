import i18n from 'i18next';
import { I18nextProviderProps, initReactI18next } from 'react-i18next';

export const startI18nForTest = (): I18nextProviderProps['i18n'] => {
  const instance = i18n;

  instance.use(initReactI18next).init({
    lng: 'ru',
    fallbackLng: 'ru',
    ns: ['translationsNS'],
    defaultNS: 'translationsNS',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    resources: { ru: { translationsNS: {} } },
  });

  return instance;
};
