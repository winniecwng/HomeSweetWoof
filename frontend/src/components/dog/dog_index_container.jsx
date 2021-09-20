import { connect } from 'react-redux';
import { fetchDogs } from '../../actions/dog_actions';
import DogIndex from './dog_index';

const mSTP = (state) => {
  return {
    dogs: Object.values(state.entities.dogs.all)
  };
};

const mDTP = dispatch => {
  return {
    fetchDogs: () => dispatch(fetchDogs())
  };
};

export default connect(mSTP, mDTP)(DogIndex);