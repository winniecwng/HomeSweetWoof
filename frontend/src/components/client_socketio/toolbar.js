import React from "react";
import { Link } from "react-router-dom";

const ToolBar = ({ room, name }) => {
  return (
    <div className="chat-box-header">
      <h4 className="chat-room-name">
        {name} & {room}'s Chat Room
      </h4>
      <Link to="/dogs" className="exit-chat-btn">
        x
      </Link>
    </div>
  );
};

export default ToolBar;
