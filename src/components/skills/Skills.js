import React from 'react';
import style from "./Skills.module.css"
import styleContainer from "../../common/styles/container.module.css"
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <span className={style.mySkills}>My skills</span>
                <div className={style.skills}>
                    <Skill
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quam, repellat! Alias corporis, deleniti est impedit ipsum iure modi, molestiae nemo, nihil numquam quasi quis quisquam quod quos recusandae reprehenderit?'}
                        title={"JS"}/>
                    <Skill text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quam, repellat! '}
                           title={"CSS"}/>
                    <Skill text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} title={"React"}/>
                </div>

            </div>
        </div>
    );
};

