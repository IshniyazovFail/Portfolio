import React from 'react';
import style from "./Nav.module.scss"
export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="src/components/header/nav/Nav">Main</a>
            <a href="src/components/header/nav/Nav">Skills</a>
            <a href="src/components/header/nav/Nav">Projects</a>
            <a href="src/components/header/nav/Nav">Contacts</a>
        </div>
    );
};
