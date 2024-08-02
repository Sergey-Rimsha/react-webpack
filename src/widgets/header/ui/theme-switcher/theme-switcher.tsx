import { FC } from 'react';

import s from './theme-switcher.module.scss';

import { useTheme } from 'app/providers/theme-provider';
import ThemeIcon from 'shared/assets/icons/theme.svg';

export const ThemeSwitcher: FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <button type="button" className={s.themeSwitcher} onClick={toggleTheme} aria-label="theme">
      <ThemeIcon className={s.svg} />
    </button>
  );
};
