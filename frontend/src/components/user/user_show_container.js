import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";


const mSTP = state => {
    return {
        state: state
    }
};

const mDTP = dispatch => {
    return {
        fetchUser: id => dispatch(fetchUser(id))
    }
};


export default connect(mSTP, mDTP)(UserShow);