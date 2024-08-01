import React from 'react';
import {useTheme} from "app/providers/theme-provider";

import s from './theme-switcher.module.scss'

import ThemeIcon from 'shared/assets/icons/theme.svg'

export const ThemeSwitcher = () => {
    const {toggleTheme} = useTheme()
    return (
        <button className={s.themeSwitcher} onClick={toggleTheme}>
            <ThemeIcon className={s.svg} />
        </button>
    );
};
