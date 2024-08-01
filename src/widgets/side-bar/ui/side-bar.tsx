import s from "./side-bar.module.scss";
import {Paths} from "shared/config";
import {NavButton} from "shared/ui";

import HomeIcon  from 'shared/assets/icons/home.svg'

export const SideBar = () => {

    return (
        <nav className={s.sideBar}>
            <h4 className={s.title}>React Webpack</h4>
            <NavButton to={Paths.MAIN}><HomeIcon/> Main</NavButton>
            <NavButton to={Paths.ABOUT}>About</NavButton>
        </nav>
    );
};