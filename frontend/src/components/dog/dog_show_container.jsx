import { connect } from "react-redux";
import { fetchDog } from "../../actions/dog_actions";
import { fetchUser } from "../../actions/user_actions";
import DogShow from "../dog/dog_show";

const mSTP = (state, ownProps) => {
  return {
    dog: state.entities.dogs, 
    userId: state.session.user.id,
    ownProps
  };
};

const mDTP = (dispatch) => {
  return {
    fetchDog: (id) => dispatch(fetchDog(id)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(mSTP, mDTP)(DogShow);
