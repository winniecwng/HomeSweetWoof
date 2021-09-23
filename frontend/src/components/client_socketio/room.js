import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

const RoomForm = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    
    return (
        <div className="socket-room-container">
            <div className="">
                <h1 className="">Join</h1>
                <div><input placeholder="Name" className="" type="text" onChange={e => setName(e.target.value)} ></input></div>
                <div><input placeholder="Room" className="" type="text" onChange={e => setRoom(e.target.value)} ></input></div>
                <Link to={`./chat_form?name=${name}&room=${room}`}>
                    <button className="" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default withRouter(RoomForm);