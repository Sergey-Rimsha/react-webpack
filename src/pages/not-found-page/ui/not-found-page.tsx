import { FC } from 'react';

import { useTranslation } from 'react-i18next';

import s from './not-found-page.module.scss';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation('translation');

  return <div className={s.notFoundPage}>{t('not-found')}</div>;
};
