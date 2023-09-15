import React from 'react';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import './InfoBar.scss';

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="infoBar-left">
            <img className="online-icon" src={onlineIcon} alt="onlineImg" />
            <h3>{room}</h3>
        </div>
        <div className="infoBar-right">
            <a href="/"><img src={closeIcon} alt="closeImg" /></a>
        </div>
    </div>
);

export default InfoBar;
