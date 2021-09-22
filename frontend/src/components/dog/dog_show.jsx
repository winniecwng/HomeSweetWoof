import React from "react";
import { withRouter } from "react-router-dom";
import CalendarContainer from "../calendar/calendar_container";
import puppy from "../../assets/images/puppy.jpg";
import ModalContainer from "../modal/modal_container";
import ScrollToTop from "../scroll/scroll_to_top";

class DogShow extends React.Component {
  componentDidMount() {
    this.props.fetchDog(this.props.ownProps.match.params.id);
    this.props.fetchUser(this.props.userId);
  }

  render() {
    if (!this.props.state) return null;
    const { dog } = this.props;

    let editDogButton;
    if (this.props.user.type === "shelter") {
      editDogButton = (
        <button
          onClick={() => this.props.openModal("editForm")}
          className="editBtn"
        >
          ✎
        </button>
      );
    }

    return (
      <>
        <ScrollToTop />
        <ModalContainer dogId={this.props.ownProps.match.params.id} />
        <div className="dog-show-container">
          <div className="dog-show-left">
            <div className="know-header">
              <div className="know">Get to know me</div>
              {editDogButton}
            </div>

            <div className="dog-show-info">
              <p className="info">Name: {dog.name}</p>
              <p className="info">Breed: {dog.breed}</p>
              <p className="info">Age: {dog.age}</p>
              <p className="info">Description: {dog.description}</p>
            </div>
            <div className="appointment-container">
              {this.props.user.type === "adopter" && (
                <p>
                  If you would like to get to know me better, book an
                  appointment!
                </p>
              )}
              <CalendarContainer dog={dog} />
            </div>
          </div>
          <div className="dog-show-right">
            <img src={dog.photo} alt="the dog" className="dog-show-img" />
            <div></div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(DogShow);
