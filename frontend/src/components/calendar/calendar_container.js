import { connect } from 'react-redux';
import { editDog } from '../../actions/dog_actions';
import Calendar from './calendar';


const mSTP = (state, ownProps) => {
    return {
        dog: ownProps.dog,
        user: state.entities.users
    }
}

const mDTP = dispatch => {
    return {
        editDog: dog => dispatch(editDog(dog))
    }
}


export default connect(mSTP, mDTP)(Calendar);