import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

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

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input
                        type="text"
                        className="joinInput"
                        placeholder="Name" 
                        onChange={onChangeName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className="joinInput mt-20"
                        placeholder="Room"
                        onChange={onChangeRoom}
                    />
                </div>
                <Link
                    to={`/chat?name=${name}&room=${room}`}
                    onClick={onClickLink}
                >
                    <button
                        type="submit"
                        className="button mt-20"
                    >
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Join;
