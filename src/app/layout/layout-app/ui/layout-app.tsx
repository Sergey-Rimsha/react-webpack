import { FC } from 'react';

import { Outlet } from 'react-router-dom';

import s from './layout-app.module.scss';

import { Header } from 'widgets/header';
import { SideBar } from 'widgets/side-bar';

export const LayoutApp: FC = () => {
  return (
    <div className={s.layoutApp}>
      <SideBar />
      <div className={s.content}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
