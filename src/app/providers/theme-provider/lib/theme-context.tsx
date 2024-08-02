import { createContext } from 'react';

export type Theme = 'light' | 'dark';

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
