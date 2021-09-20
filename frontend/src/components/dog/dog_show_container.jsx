import { connect } from "react-redux";
import { fetchDog, fetchDogs } from "../../actions/dog_actions";
import DogShow from "../dog/dog_show";

const mSTP = (state, ownProps) => {
  return {
    dog: state.entities.dogs, 
    ownProps
  };
};

const mDTP = (dispatch) => {
  return {
    fetchDog: (id) => dispatch(fetchDog(id)),
  };
};

export default connect(mSTP, mDTP)(DogShow);
