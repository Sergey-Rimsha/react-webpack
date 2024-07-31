import {RouterProvider} from "react-router-dom";
import {router} from "./router";

import './styles/index.scss'
import React from "react";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/class-names/class-names";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <header>
                <button onClick={toggleTheme}>theme switcher</button>
            </header>
            <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
        </div>
    )
}