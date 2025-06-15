import { createBrowserRouter } from 'react-router-dom';

import { LayoutApp } from 'app/layout';
import { Paths } from 'shared/config';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutApp />,
    children: [
      {
        path: Paths.MAIN,
        async lazy() {
          const { MainPage } = await import('pages/main-page');

          return { Component: MainPage };
        },
      },
      {
        path: Paths.ARTICLE,
        async lazy() {
          const { ArticlePage } = await import('pages/article-page');

          return { Component: ArticlePage };
        },
      },
      {
        path: Paths.NOT_FOUND,
        async lazy() {
          const { NotFoundPage } = await import('pages/not-found-page');

          return { Component: NotFoundPage };
        },
      },
    ],
  },
]);
