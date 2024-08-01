import {ThemeSwitcher} from "../theme-switcher/theme-switcher";

import s from './header.module.scss'
import avatar from 'shared/assets/images/avatar.png'

export const Header = () => {
    return (
        <header className={s.header}>
           <ThemeSwitcher/>
            <img className={s.img} src={avatar} alt={'avatar'}/>
        </header>
    );
};
