import { ComponentPropsWithoutRef, FC, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY, THEME, Theme, ThemeContext } from '../lib/theme-context';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || THEME.LIGHT;

export const ThemeProvider: FC<ComponentPropsWithoutRef<'div'>> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
