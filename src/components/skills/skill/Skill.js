import React from 'react';
import style from "./Skill.module.css"
export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div style={props.style} className={style.icons}></div>
            <div className={style.title}>{props.title}</div>
            <div className={style.text}>{props.text}</div>
        </div>
    );
};

