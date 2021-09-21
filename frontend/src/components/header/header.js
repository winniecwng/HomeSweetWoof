import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logout } = this.props;
    return (
      <div className="navbar-container">
        <div className="nav-left">
          <Link to="/">
            <div className="logo">Adopt A Dog</div>
          </Link>
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/about">
            <div>About</div>
          </Link>
          <Link to="#">
            <div>Profile</div>
          </Link>
        </div>
        <div className="nav-right">
          <button onClick={logout}>Sign out</button>
        </div>
      </div>
    );
  }
}

export default Header;
