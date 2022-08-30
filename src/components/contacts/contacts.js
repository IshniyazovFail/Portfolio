import React from 'react';
import style from "./contacts.module.css"
import styleContainer from "../../common/styles/container.module.css";

export const Contacts = () => {
    return (
        <div className={`${styleContainer.container} ${style.container}`}>
            <div>Contacts</div>
            <form className={style.form}>
                <input className={style.input}/>
                <input className={style.input}/>
                <textarea className={style.textarea}/>
            </form>
            <button>send</button>
        </div>
    );
};

