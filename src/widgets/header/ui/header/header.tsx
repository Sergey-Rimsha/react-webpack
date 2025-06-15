import { FC } from 'react';

import { LangSwitcher } from '../lang-switcher';
import { ThemeSwitcher } from '../theme-switcher';

import s from './header.module.scss';

import avatar from 'shared/assets/images/avatar.png';

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <ThemeSwitcher />
      <LangSwitcher />
      <img className={s.img} src={avatar} alt="avatar" />
    </header>
  );
};
