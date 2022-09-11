import React from 'react';
import style from "./works.module.scss"
import styleContainer from "../../common/styles/container.module.css"
import {Work} from "./work/Work";
import {Title} from "../title/Title";
import socialImage from "./../../common/image/image/social.jpg"
import todolistImage from "./../../common/image/image/todolist.jpg"


export const Works = () => {
    const social={
        backgroundImage:`url(${socialImage})`
    };
    const todolist={
        backgroundImage:`url(${todolistImage})`
    };
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={'My works'}/>
                <div className={style.works}>
                    <Work
                        style={todolist}
                        images='space'
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quam, repellat! Alias corporis, deleniti est impedit ipsum iure modi, molestiae nemo, nihil numquam quasi quis quisquam quod quos recusandae reprehenderit?'}
                        title={"TODOLIST"}/>
                    <Work style={social}
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quam, repellat! '}
                          title={"SOCIAL NETWORK"}/>
                </div>

            </div>
        </div>
    );
};

