import {createBrowserRouter,} from "react-router-dom";
import {LayoutApp} from "./layout/layout-app";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutApp/>,
        children: [
            {
                path: "/",
                async lazy() {
                    let {AboutPage} = await import('./page/about-page');
                    return {Component: AboutPage}
                }
            },
            {
                path: '/main',
                async lazy() {
                    let {MainPage} = await import('./page/main-page');
                    return {Component: MainPage}
                }
            }
        ]
    }
]);