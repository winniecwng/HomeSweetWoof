import { connect } from "react-redux";
import { fetchDogs } from "../../actions/dog_actions";
import DogIndex from "./dog_index";
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  return {
    dogs: Object.values(state.entities.dogs),
    currentUser: state.session.user
  };
};

const mDTP = (dispatch) => {
  return {
    fetchDogs: () => dispatch(fetchDogs()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(DogIndex);
