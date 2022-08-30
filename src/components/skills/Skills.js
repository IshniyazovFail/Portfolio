import React from 'react';
import style from "./Skills.module.css"
import styleContainer from "../../common/styles/container.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../title/Title";
import htmlIcon from "./../../common/image/icons/html.svg"
import jsIcon from "./../../common/image/icons/JS.svg"
import reactIcon from "./../../common/image/icons/react.svg"

export const Skills = () => {
    const html={
        backgroundImage:`url(${htmlIcon}`
    }
    const js={
        backgroundImage:`url(${jsIcon}`
    }
    const react={
        backgroundImage:`url(${reactIcon}`
    }
    return (
        <div className={`${styleContainer.container} ${style.container}`}>
            <Title text={'My skills'}/>
            <div className={style.skills}>
                <Skill style ={js}
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quam, repellat! Alias corporis, deleniti est impedit ipsum iure modi, molestiae nemo, nihil numquam quasi quis quisquam quod quos recusandae reprehenderit?'}
                    title={"JS"}/>
                <Skill style ={html} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quam, repellat! '}
                       title={"HTML/CSS"}/>
                <Skill style ={react} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} title={"React/Redux"}/>
            </div>
        </div>
    );
};

