import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, THEME, Theme, ThemeContext } from './theme-context';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (): void => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
