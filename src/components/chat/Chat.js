import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../infoBar/InfoBar';
import Input from '../input/Input';
import Messages from '../messages/Messages';
import chatboxIcon from '../../icons/chatboxIcon.png';
import './Chat.scss';

let socket;

const Chat = ({ location }) => {
    const ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => { 
        const { avatar, name, room } = queryString.parse(location.search);
        console.log(avatar, name, room);

        setName(name);
        setRoom(room);

        socket = io(ENDPOINT, {
            cors: {
                origin: '*',
                methods: ['GET', 'POST'],
                transports: ['websocket', 'polling'],
                credentials: true
            },
            allowEIO3: true
        });

        socket.emit('join', { avatar, name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });

        return () => {
            // socket.emit('disconnect');
            socket.disconnect();
            socket.off();
        };
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('roomData', (roomData) => {
            setUsers(roomData.users);
        });
    }, []);

    useEffect(() => {
        socket.once('message', (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    return (
        <div className="chat-outer">
            <h1>
                Live Chat
                <img
                    src={chatboxIcon}
                    alt="chatboxImg"
                />
            </h1>
            <div className="chat-inner">
                <InfoBar room={room} />
                <Messages
                    name={name}
                    messages={messages}
                />
                <Input
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                />
            </div>
        </div>
    );
};

export default Chat;