import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleNav: 1,
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { logout, userId } = this.props;
    const { toggleNav } = this.state;
    return (
      <div className="navbar-container">
        <div className="nav-left">
          <div className="logo">
            <Link
              to="/"
              className="nav-link"
              onClick={() => this.setState({ toggleNav: 1 })}
            >
              <div className="logo">Home Sweet Woof</div>
            </Link>
          </div>
          <div className="links">
            <Link
              to="/dogs"
              className="nav-link"
              onClick={() => this.setState({ toggleNav: 1 })}
            >
              <div
                className={toggleNav === 1 ? "nav home active-nav" : "nav home"}
              >
                Home
              </div>
            </Link>
            <Link
              to="/about"
              className="nav-link"
              onClick={() => this.setState({ toggleNav: 2 })}
            >
              <div
                className={
                  toggleNav === 2 ? "nav about active-nav" : "nav about"
                }
              >
                About
              </div>
            </Link>
            <Link
              to={`/users/${userId}`}
              className="nav-link"
              onClick={() => this.setState({ toggleNav: 3 })}
            >
              <div
                className={
                  toggleNav === 3 ? "nav profile active-nav" : "nav profile"
                }
              >
                Profile
              </div>
            </Link>
          </div>
        </div>
        <div className="nav-right">
          <input
            type="submit"
            onClick={logout}
            value="Sign out"
            className="sign-out"
          />
          {/* <button onClick={}>Sign out</button> */}
        </div>
      </div>
    );
  }
}

export default Header;
