import React from 'react';
import { connect } from 'react-redux';
import { fetchDog, editDog } from '../../actions/dog_actions';
import DogEditComp from './dog_edit_comp';

class DogEditForm extends React.Component {
  componentDidMount() {
    this.props.fetchDog(this.props.ownProps.match.params.id)
  }

  render () {
    const { dog, fetchDog, editDog } = this.props;
    if (Object.values(dog).length < 1) return null;
    if (!dog) return null;
    return (
      <DogEditComp dog={dog} fetchdog={fetchDog} editDog={editDog}/>
    )
  }
}

const mSTP = (state, ownProps) => {
    return {
      dog: state.entities.dogs, 
      ownProps
    };
  };

const mDTP = (dispatch) => {
    return {
      fetchDog: (id) => dispatch(fetchDog(id)),
      editDog: data => dispatch(editDog(data))
    };
  };

export default connect(mSTP, mDTP)(DogEditForm);