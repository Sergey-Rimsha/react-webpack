import {createBrowserRouter,} from "react-router-dom";
import {LayoutApp} from "app/layout/layout-app";
import {Paths} from "shared/config";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutApp/>,
        children: [
            {
                path: Paths.MAIN,
                async lazy() {
                    let {MainPage} = await import('pages/main-page');
                    return {Component: MainPage}
                }
            },
            {
                path: Paths.ARTICLE,
                async lazy() {
                    let {ArticlePage} = await import('pages/article-page');
                    return {Component: ArticlePage}
                }
            },
        ]
    }
]);