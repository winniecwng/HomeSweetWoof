import React from "react";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="currentUser-chat-container">
      <p className="current-user-name">{trimmedName}</p>
      <div>
        <p className="admin-text">{text}</p>
      </div>
    </div>
  ) : (
    <div className="responder-chat-container">
      <p className="responder-name">{user}</p>
      <div>
        <p className="responder-text">{text}</p>
      </div>
    </div>
  );
};

export default Message;
