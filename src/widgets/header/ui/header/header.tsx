import {ThemeSwitcher} from "../theme-switcher/theme-switcher";

import s from './header.module.scss'
import avatar from 'shared/assets/images/avatar.png'
import {LangSwitcher} from "../lang-switcher/lang-switcher";

export const Header = () => {
    return (
        <header className={s.header}>
            <ThemeSwitcher/>
            <LangSwitcher/>
            <img className={s.img} src={avatar} alt={'avatar'}/>
        </header>
    );
};
