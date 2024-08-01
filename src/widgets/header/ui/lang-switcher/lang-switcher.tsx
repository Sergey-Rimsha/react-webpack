import {useTranslation} from "react-i18next";

import s from './lang-switcher.module.scss'

export const LangSwitcher = () => {
    const {t, i18n} = useTranslation('translation')

    const onToggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en': 'ru')
    }

    return (
        <button className={s.languageSwitcher} onClick={onToggleLanguage}>{t('language')}</button>
    );
};
