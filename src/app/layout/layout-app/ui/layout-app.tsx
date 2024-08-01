import React from 'react';
import {Outlet} from "react-router-dom";

import s from './layout-app.module.scss'
import {NavBar} from "widgets/nav-bar";
import {Header} from "widgets/header";

export const LayoutApp = () => {

    return (
        <div className={s.layoutApp}>
            <NavBar/>
            <div className={s.content}>
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
};
