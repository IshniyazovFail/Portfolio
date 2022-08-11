import React from 'react';
import style from "./Main.module.css"
import styleContainer from "../../common/styles/container.module.css"
export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                       Hi there <br/>
                       <h1>I am Fail Ishniyazov</h1><br/>
                       Frontend Developer.
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    );
};

