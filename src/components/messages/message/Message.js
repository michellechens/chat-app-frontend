import React from 'react';
import robotIcon from '../../../avatar/images/robot.png';
import AVATAR_LIST from '../../../avatar';
import './Message.scss';

const Message = ({ name, message: { avatar, user, text, time } }) => {
    let isSendByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();
    const messageTime = time.split(', ')[1]; 

    if (user === trimmedName) {
        isSendByCurrentUser = true;
    }

    const renderAvatar = (avatarId) => {
        if (!avatarId) {
            return <img src={robotIcon} alt="admin" />
        } else {
            const avatarItem = AVATAR_LIST.find((item) => item.id === avatarId);
            if (!avatarItem) return null;
            return <img src={avatarItem.img} alt={avatarItem.id} />
        }
    };

    return (
        isSendByCurrentUser
        ? (
            <div className="message-container justify-end">
                <p className="sent-text pr-10">
                    <span>{trimmedName}</span>
                    <span>{messageTime}</span>
                </p>
                <div className="message-box right highlight">
                    <p className="message-text light">{text}</p>
                </div>
                {renderAvatar(avatar)}
            </div>
        )
        : (
            <div className="message-container justify-start">
                {renderAvatar(avatar)}
                <div className="message-box left">
                    <p className="message-text dark">{text}</p>
                </div>
                <p className="sent-text pl-10">
                    <span>{user}</span>
                    <span>{messageTime}</span>
                </p>
            </div>
        )
    );
};

export default Message;
