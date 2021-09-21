import React from "react";
import { withRouter } from "react-router-dom";
import CalendarContainer from "../calendar/calendar_container";
import puppy from "../../assets/images/puppy.jpg";

class DogShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
    this.props.fetchDog(this.props.ownProps.match.params.id);
  }

  render() {
    if (!this.props.dog) return null;

    const { dog } = this.props;

    return (
      <div className="dog-show-container">
        <div className="dog-show-left">
          <div className="know">Get to know me</div>
          <div className="dog-show-info">
            <p className="info">Name: {dog.name}</p>
            <p className="info">Breed: {dog.breed}</p>
            <p className="info">Age: {dog.age}</p>
            <p className="info">Description: {dog.description}</p>
          </div>
          <div className="appointment-container">
            <p>
              If you would like to get to know me better, book an appointment!
            </p>
            <CalendarContainer dog={dog} />
          </div>
        </div>
        <div className="dog-show-right">
          <img src={puppy} className="dog-show-img" />
        </div>
      </div>
    );
  }
}

export default withRouter(DogShow);
