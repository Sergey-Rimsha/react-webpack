import {RouterProvider} from "react-router-dom";


import './styles/index.scss'
import {router} from "app/router";
import {useTheme} from "app/providers/theme-provider";
import {classNames} from "shared/lib";

export const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
        </div>
    )
}