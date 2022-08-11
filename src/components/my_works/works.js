import React from 'react';
import style from "./works.module.css"
import styleContainer from "../../common/styles/container.module.css"
import {Work} from "./work/Work";


export const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <span className={style.title}>My works</span>
                <div className={style.works}>
                    <Work
                        mode
                        images='space'
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quam, repellat! Alias corporis, deleniti est impedit ipsum iure modi, molestiae nemo, nihil numquam quasi quis quisquam quod quos recusandae reprehenderit?'}
                        title={"TODOLIST"}/>
                    <Work images='space'
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quam, repellat! '}
                          title={"SOCIAL NETWORK"}/>
                </div>

            </div>
        </div>
    );
};

