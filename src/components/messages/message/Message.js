import React from 'react';
import './Message.scss';

const Message = ({ name, message: { user, text } }) => {
    let isSendByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSendByCurrentUser = true;
    }

    return (
        isSendByCurrentUser
        ? (
            <div className="message-container justify-end">
                <p className="sent-text pr-10">{trimmedName}</p>
                <div className="message-box right highlight">
                    <p className="message-text light">{text}</p>
                </div>
            </div>
        )
        : (
            <div className="message-container justify-start">
                <div className="message-box left">
                    <p className="message-text dark">{text}</p>
                </div>
                <p className="sent-text pl-10">{user}</p>
            </div>
        )
    );
};

export default Message;
