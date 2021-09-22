import React from "react";
import { connect } from "react-redux";
import { fetchDog, editDog, fetchDogs } from "../../actions/dog_actions";
import DogEditComp from "./dog_edit_comp";

class DogEditForm extends React.Component {

  componentDidMount() {
    this.props.fetchDog(this.props.dogId);
  }

  render() {
    const { dog, fetchDog, editDog, dogId } = this.props;
    if (!this.props.dog) return null;
    
    return (
      <DogEditComp
        dog={dog}
        fetchdog={fetchDog}
        editDog={editDog}
        dogId={dogId}
      />
    );
  }
}

const mSTP = (state, ownProps) => {
  return {
    dog: state.entities.dogs,
    ownProps,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchDogs: () => dispatch(fetchDogs()),
    fetchDog: (id) => dispatch(fetchDog(id)),
    editDog: (data) => dispatch(editDog(data)),
  };
};

export default connect(mSTP, mDTP)(DogEditForm);
