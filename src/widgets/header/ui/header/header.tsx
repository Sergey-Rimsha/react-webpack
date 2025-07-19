import { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { LangSwitcher } from '../lang-switcher';
import { ThemeSwitcher } from '../theme-switcher';

import s from './header.module.scss';

import avatar from 'shared/assets/images/avatar.png';

export const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <header className={s.header}>
      <h4 className={s.title}>{t('logo')}</h4>
      <div className={s.wrap}>
        <ThemeSwitcher />
        <LangSwitcher />
        <img className={s.img} src={avatar} alt="avatar" />
      </div>
    </header>
  );
};
