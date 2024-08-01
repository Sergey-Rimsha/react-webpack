import s from "./side-bar.module.scss";
import {Paths} from "shared/config";
import {NavButton} from "shared/ui";

import HomeIcon  from 'shared/assets/icons/home.svg'
import ArticleIcon  from 'shared/assets/icons/article.svg'
import {useTranslation} from "react-i18next";


export const SideBar = () => {

    const {t} = useTranslation(['translation'] )

    return (
        <nav className={s.sideBar}>
            <h4 className={s.title}>React Webpack</h4>
            <NavButton to={Paths.MAIN}><HomeIcon/>{t('main')}</NavButton>
            <NavButton to={Paths.ARTICLE}><ArticleIcon/>{t('article')}</NavButton>
        </nav>
    );
};