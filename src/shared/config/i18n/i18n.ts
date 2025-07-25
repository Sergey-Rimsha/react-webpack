import i18n, { TFunction } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export const startI18n = (): Promise<TFunction<'translation', undefined>> => {
  return i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'ru',
      debug: __IS_DEV__,
      interpolation: {
        escapeValue: false,
      },
    });
};
