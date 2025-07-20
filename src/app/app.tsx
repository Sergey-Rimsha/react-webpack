import { FC } from 'react';

import { RouterProvider } from 'react-router-dom';

import './styles/index.scss';

import { useTheme } from 'app/providers';
import { router } from 'app/router';
import { startI18n } from 'shared/config';
import { classNames } from 'shared/lib';
import { Loader } from 'shared/ui';

startI18n().then();

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </div>
  );
};
