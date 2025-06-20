import { FC } from 'react';

import { useTranslation } from 'react-i18next';

import s from './side-bar.module.scss';

import ArticleIcon from 'shared/assets/icons/article.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import { Paths } from 'shared/config';
import { NavButton } from 'shared/ui';

export const SideBar: FC = () => {
  const { t } = useTranslation(['translation']);

  return (
    <nav className={s.sideBar}>
      <h4 className={s.title}>React Webpack</h4>
      <NavButton to={Paths.MAIN}>
        <HomeIcon />
        {t('main')}
      </NavButton>
      <NavButton to={Paths.ARTICLE}>
        <ArticleIcon />
        {t('article')}
      </NavButton>
    </nav>
  );
};
