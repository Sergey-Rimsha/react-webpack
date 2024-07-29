import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

export const LayoutApp = () => {
    return (
        <div>
            <nav>
                <NavLink to={'/'}>About</NavLink>
                <NavLink to={'/main'}>main</NavLink>
            </nav>
            <Outlet/>
        </div>
    );
};
