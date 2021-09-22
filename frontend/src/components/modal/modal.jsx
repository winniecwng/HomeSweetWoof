import React from "react";

import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import EditFormContainer from "../dog/dog_edit_container";
// import { closeModal } from "../../actions/modal_actions";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.hideModal = this.hideModal.bind(this);
  }

  hideModal(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!e.target.classList.contains("ignore-modal-close")) {
      this.props.closeModal();
    }
  }

  render() {
    const { modal, closeModal } = this.props;
    let component;

    if (!modal) return null;

    switch (modal) {
      case "login":
        component = <LoginFormContainer />;
        break;
      case "signup":
        component = <SignupFormContainer />;
        break;
      case "editForm":
        component = <EditFormContainer dogId={this.props.ownProps.dogId} />;
        break;
      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={this.hideModal}>
        {component}
      </div>
    );
  }
}

export default Modal;
