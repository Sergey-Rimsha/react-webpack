import {RouterProvider} from "react-router-dom";
import {router} from "./router";

import './styles/index.scss'
import React from "react";
import {useTheme} from "./theme/useTheme";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <header>
                <button onClick={toggleTheme}>theme switcher</button>
            </header>
            <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
        </div>
    )
}