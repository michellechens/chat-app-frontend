import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.scss';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const onChangeName = (event) => {
        setName(event.target.value);
    };

    const onChangeRoom = (event) => {
        setRoom(event.target.value);
    };

    const onClickLink = (event) => {
        if (!name || !room) {
            event.preventDefault();
        }
    };

    const url = `/chat?name=${name}&room=${room}`;

    return (
        <div className="join-outer">
            <div className="join-inner">
                <h1>
                    Welcome To <b>Live Chat</b>
                </h1>
                <div>
                    <input
                        type="text"
                        className="join-input"
                        placeholder="Name" 
                        onChange={onChangeName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className="join-input"
                        placeholder="Room"
                        onChange={onChangeRoom}
                    />
                </div>
                <Link
                    to={url}
                    onClick={onClickLink}
                >
                    <button
                        type="submit"
                        className="join-button"
                    >
                        Join
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Join;
