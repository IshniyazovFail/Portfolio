import React from 'react';
import style from "./footer.module.scss"
import styleContainer from "../../common/styles/container.module.css";
import telegram from './../../common/image/icons/telegram.svg'
import facebook from './../../common/image/icons/facebook.svg'
import linkedin from './../../common/image/icons/linkedin.svg'
import phone from './../../common/image/icons/phone.svg'
import {IconsForFooter} from "./iconsForFooter/iconsForFooter";

export const Footer = () => {
    const telegramIcon={
        backgroundImage:`url(${telegram}`
    }
    const facebookIcon={
        backgroundImage:`url(${facebook}`
    }
    const linkedinIcon={
        backgroundImage:`url(${linkedin}`
    }
    const phoneIcon={
        backgroundImage:`url(${phone}`
    }

    return (
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.name}>ISHNIYAZOV FAIL</div>
                <div className={style.icons}>
                    <IconsForFooter style={telegramIcon}/>
                    <IconsForFooter style={facebookIcon}/>
                    <IconsForFooter style={linkedinIcon}/>
                    <IconsForFooter style={phoneIcon}/>
                </div>
                <div>© 2022 All rights reserved </div>
            </div>
    );
};

