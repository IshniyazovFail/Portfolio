import React from 'react';
import style from "./contacts.module.scss"
import styleContainer from "../../common/styles/container.module.css";
import backgroundImage from "../../common/image/image/input2.jpg";

export const Contacts = () => {
    const background = {
        backgroundImage: `url(${backgroundImage}`
    }
    return (
        <div className={`${styleContainer.container} ${style.container}`}>
            <div className={style.title}>Contacts</div>
            <form className={style.form}>
                <input placeholder={'name'} style={background} className={style.input}/>
                <input placeholder={'mail'} style={background} className={style.input}/>
                <textarea placeholder={'comments'} style={background} className={style.textarea}/>
            </form>
            <button className={style.button}>send</button>
        </div>
    );
};

