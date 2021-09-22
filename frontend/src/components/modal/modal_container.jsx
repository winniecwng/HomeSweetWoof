import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import Modal from "../modal/modal";

const mSTP = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    ownProps,
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(Modal);
