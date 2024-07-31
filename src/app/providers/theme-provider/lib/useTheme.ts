import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, THEME, Theme, ThemeContext} from "app/providers/theme-provider/lib/theme-context";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {

    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, toggleTheme}

}