import React from 'react';
import './Message.css';

const Message = ({ name, message: { user, text } }) => {
    let isSendByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSendByCurrentUser = true;
    }

    return (
        isSendByCurrentUser
        ? (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{text}</p>
                </div>
            </div>
        )
        : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{text}</p>
                </div>
                <p className="sentText pl-10">{user}</p>
            </div>
        )
    );
};

export default Message;
