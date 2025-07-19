import { FC } from 'react';

import { useTranslation } from 'react-i18next';

import s from './page-error.module.scss';

import { Button } from 'shared/ui';

export const PageError: FC = () => {
  const { t } = useTranslation('translation');

  const reloadPage = (): void => {
    window.location.reload();
  };

  return (
    <div className={s.pageError}>
      <h1>{t('page_error_title')}</h1>
      <Button onClick={reloadPage}>{t('reload_page')}</Button>
    </div>
  );
};
