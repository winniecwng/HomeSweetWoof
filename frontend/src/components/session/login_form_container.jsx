import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors, session}) => {
    return {
        errors: errors.session,
        formType: 'login',
        logCheck: session.isAuthenticated//checks to see if user logged in succesfully
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(SessionForm);