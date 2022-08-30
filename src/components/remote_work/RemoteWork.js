import React from 'react';
import styleContainer from "../../common/styles/container.module.css";
import style from './RemoteWork.module.css'
import backgroundRemote from "./../../common/image/image/1657339019_48-animeshka-org-p-crucifixes-and-zeros-background-foni-56.jpg"

export const RemoteWork = () => {
    const remoteBacklground={
        backgroundImage:`url(${backgroundRemote})`
    }
    return (
        <div style={remoteBacklground} className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.title}>I am considering options for remote work</div>
                <button>hire me</button>
            </div>
        </div>
    );
};

