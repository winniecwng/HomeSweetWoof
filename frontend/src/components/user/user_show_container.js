import { connect } from "react-redux";
import { fetchUser, updateProfile } from "../../actions/user_actions";
import { fetchDogs, fetchUserDogs, destroyDog } from "../../actions/dog_actions"; 
import UserShow from "./user_show";


const mSTP = (state, ownProps) => {
    return {
        user: ownProps.match.params.id, //gets the user info of the page of :id
        currentUser: state.session.user, //looged in
        ownProps
    }
};

const mDTP = dispatch => {
    return {
        fetchUser: id => dispatch(fetchUser(id)),
        fetchUserDogs: id => dispatch(fetchUserDogs(id)),
        fetchDogs: () => dispatch(fetchDogs()),
        updateProfile: user => dispatch(updateProfile(user)),
        destroyDog: dog => dispatch(destroyDog(dog))
    }
};


export default connect(mSTP, mDTP)(UserShow);