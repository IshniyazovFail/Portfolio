import React from 'react';
import style from "./Work.module.scss"
export const Work = (props) => {

    return (
        <div className={style.work}>
           <div className={style.image} style={props.style}>
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

