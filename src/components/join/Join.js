import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import chatboxIcon from '../../icons/chatboxIcon.png';
import AVATAR_LIST from '../../avatar';
import './Join.scss';

const Join = () => {
    const [avatar, setAvatar] = useState(AVATAR_LIST[0]?.id);
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

    const renderAvatar = (item, i) => (
        <img
            key={item.id}
            id={item.id}
            className={item.id === avatar ? 'active' : undefined}
            title={item.id}
            alt={item.id}
            src={item.img}
            onClick={(e) => setAvatar(e.target.id)}
        />
    );

    const url = `/chat?avatar=${avatar}&name=${name}&room=${room}`;

    return (
        <div className="join-outer">
            <div className="join-inner">
                <h1>
                    Welcome To <b>Live Chat</b>
                    <img
                        src={chatboxIcon}
                        alt="chatboxImg"
                    />
                </h1>
                <div className="join-avatar-wrapper">
                    <span>Avatar</span> 
                    <div className="join-avatar">
                        {AVATAR_LIST.map(renderAvatar)}
                    </div>
                </div>
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
