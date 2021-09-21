import React from "react";
import { withRouter } from "react-router-dom";
import puppy from "../../assets/images/puppy.jpg";

class DogShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDog(this.props.ownProps.match.params.id);
  }

  render() {
    if (!this.props.dog) return null;
    const { dog } = this.props;
    return (
      <div className="dog-show-container">
        <div className="dog-show-left">
          <img src={puppy} className="dog-show-img" />
        </div>
        <div className="dog-show-right">
          <div className="dog-show-info">
            <p>Name: {dog.name}</p>
            <p>Breed: {dog.breed}</p>
            <p>Age: {dog.age}</p>
            <p>Description: {dog.description}</p>
            <button className="make-appointment">Make an Appointment</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DogShow);
