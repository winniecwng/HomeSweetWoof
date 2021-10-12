import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal, } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';

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
        closeModal: () => dispatch(closeModal()),
        clearErrors: ()=> dispatch(clearErrors())
    };
};

export default connect(mSTP, mDTP)(SessionForm);