import React from 'react';
import s from "./nav-bar.module.scss";
import {Paths} from "shared/config";
import {NavButton} from "shared/ui";

export const NavBar = () => {

    return (
        <nav className={s.navBar}>
            <h4>title project</h4>
            <NavButton to={Paths.MAIN}>Main</NavButton>
            <NavButton to={Paths.ABOUT}>About</NavButton>
        </nav>
    );
};