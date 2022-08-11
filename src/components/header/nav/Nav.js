import React from 'react';
import style from "./Nav.module.css"
export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="src/components/header/nav/Nav">Главная</a>
            <a href="src/components/header/nav/Nav">Скиллы</a>
            <a href="src/components/header/nav/Nav">Проекты</a>
            <a href="src/components/header/nav/Nav">Контакты</a>
        </div>
    );
};
