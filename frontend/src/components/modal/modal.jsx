import React from "react";

import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import EditFormContainer from "../dog/dog_edit_container";

class Modal extends React.Component {
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
      <div className="modal-background" onClick={closeModal}>
        {component}
      </div>
    );
  }
}

export default Modal;
