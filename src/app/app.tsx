import { FC } from 'react';

import { RouterProvider } from 'react-router-dom';

import './styles/index.scss';

import { useTheme } from 'app/providers';
import { router } from 'app/router';
import { classNames } from 'shared/lib';
import { Loader } from 'shared/ui';

import 'shared/config/i18n/i18n';

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </div>
  );
};
