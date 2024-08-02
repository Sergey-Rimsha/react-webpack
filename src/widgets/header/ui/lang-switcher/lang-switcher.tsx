import { FC } from 'react';

import { useTranslation } from 'react-i18next';

import s from './lang-switcher.module.scss';

export const LangSwitcher: FC = () => {
  const { t, i18n } = useTranslation('translation');

  const onToggleLanguage = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <button type="button" className={s.languageSwitcher} onClick={onToggleLanguage}>
      {t('language')}
    </button>
  );
};
