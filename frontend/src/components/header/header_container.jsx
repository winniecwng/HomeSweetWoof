import { connect } from "react-redux";
import Header from "./header";
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router";
import { fetchUser } from "../../actions/user_actions";
// import { session } from "passport";

const mSTP = (state, ownProps) => {
  return {
    user: state.session.user,
    ownProps,
    state,
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default withRouter(connect(mSTP, mDTP)(Header));
