import { FC } from 'react';

import { useTranslation } from 'react-i18next';

export const ArticlePage: FC = () => {
  const { t } = useTranslation('article');

  return (
    <div>
      <h3>{t('title')}</h3>
    </div>
  );
};
