import { FC } from 'react';

import s from './loader.module.scss';

export const Loader: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.loader} />
    </div>
  );
};
