import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

class RoomForm extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      name: this.props.currentUser.username,
      room: (this.props.currentUser.id + this.props.pageId).split('').sort().join('')
    }
  }

  render() {
    
    return (
      <div className="socket-room-container">
          <Link to={`/chat_form?name=${this.state.name}&room=${this.state.room}`}>
            <button className="" type="submit">
              Message
            </button>
          </Link>
      </div>
    );
  }
};

export default withRouter(RoomForm);
