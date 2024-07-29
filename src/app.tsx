import './app.scss'
import {RouterProvider} from "react-router-dom";
import {router} from "./router";

export const App = () => {
    return (
        <div className={'app'}>
            <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
        </div>
    )
}