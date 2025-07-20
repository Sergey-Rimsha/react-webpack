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
    <nav className={s.sideBar} data-testid="side-bar">
      <NavButton to={Paths.MAIN} data-testid="main-nav-btn">
        <HomeIcon />
        {t('main')}
      </NavButton>
      <NavButton to={Paths.ARTICLE} data-testid="article-nav-btn">
        <ArticleIcon />
        {t('article')}
      </NavButton>
    </nav>
  );
};
