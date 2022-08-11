import React from 'react';
import style from "./footer.module.css"
import styleContainer from "../../common/styles/container.module.css";
import telegram from './../../common/image/icons/telegram.svg'
import facebook from './../../common/image/icons/facebook.svg'
import linkedin from './../../common/image/icons/linkedin.svg'
import phone from './../../common/image/icons/phone.svg'
export const Footer = () => {
    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.name}>ISHNIYAZOV FAIL</div>
                <div className={style.icons}>
                    <img className={style.images} src={telegram}/>
                    <img className={style.images} src={facebook}/>
                    <img className={style.images} src={linkedin}/>
                    <img className={style.images} src={phone}/>
                </div>
                <div>© 2022 All rights reserved </div>
            </div>
        </div>
    );
};

