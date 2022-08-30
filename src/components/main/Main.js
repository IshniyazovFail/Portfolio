import React from 'react';
import style from "./Main.module.scss"
import styleContainer from "../../common/styles/container.module.css"
import myPhoto from "../../common/image/image/photo.jpg"

export const Main = () => {
    const photo={
        backgroundImage:`url(${myPhoto})`
    }
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <div className={style.subtitle}>Hi there </div>
                    <h2>I am Fail Ishniyazov <span>Frontend Developer</span></h2>
                </div>
                <div style={photo} className={style.photo}></div>
            </div>

        </div>
    );
};

