import { FC } from 'react';

import { RouterProvider } from 'react-router-dom';

import './styles/index.scss';

import { useTheme } from 'app/providers/theme-provider';
import { router } from 'app/router';
import { classNames } from 'shared/lib';

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </div>
  );
};
