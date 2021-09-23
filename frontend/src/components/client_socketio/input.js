import React from "react";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <div className="input-container">
      <form>
        <textarea
          placeholder="type your message here..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        />
      </form>
    </div>
  );
};

export default Input;
