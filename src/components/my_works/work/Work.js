import React from 'react';
import style from "./Work.module.css"
export const Work = (props) => {
    return (
        <div className={style.work}>
           <div className={props.mode?style.space:style.ocean}>
               <div className={style.button}>
                   <a href='#'>Смотреть</a>
               </div>

           </div>
            <div className={style.titleBlock}>
                <div className={style.title}>{props.title}</div>
                <div className={style.text}>{props.text}</div>
            </div>
        </div>
    );
};

