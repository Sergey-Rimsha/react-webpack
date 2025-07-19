import { FC, Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import s from './layout-app.module.scss';

import { Loader } from 'shared/ui';
import { Header, SideBar } from 'widgets';

export const LayoutApp: FC = () => {
  return (
    <div className={s.layoutApp}>
      <Header />

      <div className={s.wrap}>
        <SideBar />
        <div className={s.content}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
