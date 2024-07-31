import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import s from './layout-app.module.scss'
import {Paths} from "shared/config";

export const LayoutApp = () => {


    return (
        <div className={s.layoutApp}>
            <nav className={s.nav}>
                <NavLink to={Paths.ABOUT}>About</NavLink>
                <NavLink to={Paths.MAIN}>main</NavLink>
            </nav>
            <Outlet/>
        </div>
    );
};
