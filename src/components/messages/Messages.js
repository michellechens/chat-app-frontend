import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './message/Message';
import './Messages.scss';

const Messages = ({ name, messages }) => {
    const currentDate = new Date().toLocaleDateString();
    const messageDate = messages?.[0]?.time?.split(',')[0] || currentDate;

    return (
        <ScrollToBottom className="messages">
            <div className="messages-date-box">{messageDate}</div>
            {
                messages.map((message, idx) => (
                    <Message
                        key={idx}
                        name={name}
                        message={message}
                    />
                ))
            }
        </ScrollToBottom>
    );
};

export default Messages;
