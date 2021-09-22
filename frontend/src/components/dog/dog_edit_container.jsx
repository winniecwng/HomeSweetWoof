import React from "react";
import { connect } from "react-redux";
import { fetchDog, editDog, fetchDogs } from "../../actions/dog_actions";
import DogEditComp from "./dog_edit_comp";

class DogEditForm extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   dog:
    // }
  }

  componentDidMount() {
    // const dog = this.props.fetchDog(this.props.dogId);
    // debugger;
    this.props.fetchDog(this.props.dogId);
  }

  render() {
    // debugger;
    const { dog, fetchDog, editDog, dogId } = this.props;
    if (!this.props.dog) return null;
    // if (Object.values(dog).length < 1) return null;
    // if (!this.state.entities.dogs._id) return null;
    // const dog = this.props.fetchDog(dogId);
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
  // debugger;
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
