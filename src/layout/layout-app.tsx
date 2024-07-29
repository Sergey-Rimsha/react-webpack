import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import s from './layout-app.module.scss'

export const LayoutApp = () => {


    return (
        <div className={s.layoutApp}>
            <nav className={s.nav}>
                <NavLink to={'/'}>About</NavLink>
                <NavLink to={'/main'}>main</NavLink>
            </nav>
            <Outlet/>
        </div>
    );
};
