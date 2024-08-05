import { FC } from 'react';

import { useTranslation } from 'react-i18next';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation('translation');

  return <div>{t('not-found')}</div>;
};
