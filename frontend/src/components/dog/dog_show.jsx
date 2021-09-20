import React from "react";
import { withRouter } from "react-router-dom";

class DogShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dog } = this.props;
    return (
      <div className="dog-show-container">
        <div className="dog-show-left"></div>
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
