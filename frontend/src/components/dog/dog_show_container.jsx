import { connect } from "react-redux";
import { fetchDog, editDog } from "../../actions/dog_actions";
import { fetchUser } from "../../actions/user_actions";
import DogShow from "../dog/dog_show";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
  return {
    dog: state.entities.dogs,
    userId: state.session.user.id,
    // user: ownProps.match.params.id,
    user: state.entities.users,
    ownProps,
    state,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchDog: (id) => dispatch(fetchDog(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    editDog: (data) => dispatch(editDog(data)),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mSTP, mDTP)(DogShow);
