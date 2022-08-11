import React from 'react';
import styleContainer from "../../common/styles/container.module.css";
import style from './RemoteWork.module.css'

export const RemoteWork = () => {
    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.title}>I am considering options for remote work</div>
                <button>hire me</button>
            </div>


        </div>
    );
};

