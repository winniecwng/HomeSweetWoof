import { connect } from "react-redux";
import Header from "./header";
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router";
import { session } from "passport";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[session.id], // ????
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default withRouter(connect(mSTP, mDTP)(Header));
