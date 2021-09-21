import { connect } from "react-redux";
import { fetchUser, updateProfile } from "../../actions/user_actions";
import { fetchUserDogs } from "../../actions/dog_actions"; 
import UserShow from "./user_show";


const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users,
        ownProps
    }
};

const mDTP = dispatch => {
    return {
        fetchUser: id => dispatch(fetchUser(id)),
        fetchUserDogs: id => dispatch(fetchUserDogs(id)),
        updateProfile: user => dispatch(updateProfile(user))
    }
};


export default connect(mSTP, mDTP)(UserShow);