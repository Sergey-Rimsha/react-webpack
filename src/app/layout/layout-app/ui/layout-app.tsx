import React from 'react';
import {Outlet} from "react-router-dom";

import s from './layout-app.module.scss'
import {NavBar} from "widgets/nav-bar";

export const LayoutApp = () => {


    return (
        <div className={s.layoutApp}>
            <NavBar/>
            <div>
                <header>header</header>
                <Outlet/>
            </div>
        </div>
    );
};
