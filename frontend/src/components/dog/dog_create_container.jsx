import { connect } from 'react-redux';
import { composeDog } from '../../actions/dog_actions';
import DogForm from './dog_form';

const mSTP = (state) => {
  return {
    currentUser: state.session.user,
    newDog: state.entities.dogs.new //not sure about new?
  };
};

const mDTP = dispatch => {
  return {
    composeDog: data => dispatch(composeDog(data))
  };
};

export default connect(mSTP, mDTP)(DogForm);