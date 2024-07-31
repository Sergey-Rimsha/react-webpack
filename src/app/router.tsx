import {createBrowserRouter,} from "react-router-dom";
import {LayoutApp} from "app/layout/layout-app";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutApp />,
        children: [
            {
                path: "/",
                async lazy() {
                    let {AboutPage} = await import('pages/about-page');
                    return {Component: AboutPage}
                }
            },
            {
                path: '/main',
                async lazy() {
                    let {MainPage} = await import('pages/main-page');
                    return {Component: MainPage}
                }
            }
        ]
    }
]);