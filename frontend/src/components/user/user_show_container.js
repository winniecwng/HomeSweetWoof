import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../actions/user_actions";
import UserShow from "./user_show";


const mSTP = (state, ownProps) => {
    debugger;

    return {
        user: state.entities.user,
        ownProps
    }
};

const mDTP = dispatch => {
    return {
        fetchUser: id => dispatch(fetchUser(id)),
        fetchUsers: () => dispatch(fetchUsers)
    }
};


export default connect(mSTP, mDTP)(UserShow);