import React from 'react';
import s from "./nav-bar.module.scss";
import {Paths} from "shared/config";
import {useTheme} from "app/providers/theme-provider";
import {NavButton} from "shared/ui";

export const NavBar = () => {
    const {toggleTheme} = useTheme()

    return (
        <nav className={s.navBar}>
            <header>
                <button onClick={toggleTheme}>theme switcher</button>
            </header>
            <NavButton to={Paths.MAIN}>Main</NavButton>
            <NavButton to={Paths.ABOUT}>About</NavButton>
        </nav>
    );
};