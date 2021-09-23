import React from "react";
import AdopterAppointmentsContainer from "./adoption_appointments_container";
import ShelterDogs from "./shelter_dogs";
import AppointmentList from "./appointment_list.jsx";
import Room from "../client_socketio/room";

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userType: "",
      editingNumber: false,
      editingDescription: false,
      phoneNumber: "",
      description: "",
      user: null,
    };

    this.editNumber = this.editNumber.bind(this);
    this.editDescription = this.editDescription.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.submitNumber = this.submitNumber.bind(this);
    this.submitDescription = this.submitDescription.bind(this);
  }

  componentDidMount() {
    const id = this.props.ownProps.match.params.id;

    this.props.fetchUser(id).then((userResult) => {
      this.setState({ user: userResult.user.data });

      !this.props.dogs.length && this.props.fetchDogs();
    });
    if (this.props.user.id !== this.props.ownProps.match.params.id) {
      this.props.fetchUser(id);
    }
  }

  editNumber(e) {
    e.preventDefault();
    this.setState({ editingNumber: !this.state.editingNumber });
  }

  editDescription(e) {
    e.preventDefault();
    this.setState({ editingDescription: !this.state.editingDescription });
  }

  changeNumber(e) {
    e.preventDefault();
    this.setState({ phoneNumber: e.currentTarget.value });
  }

  changeDescription(e) {
    e.preventDefault();
    this.setState({ description: e.currentTarget.value });
  }

  submitNumber(e) {
    console.log(this.state.phoneNumber);
    e.preventDefault();
    let user = { ...this.props.user };
    user.phone_number = this.state.phoneNumber;
    this.props.updateProfile(user);
    this.setState({ editingNumber: false });
  }

  submitDescription(e) {
    e.preventDefault();
    let user = { ...this.props.user };
    user.description = this.state.description;
    this.props.updateProfile(user);
    this.setState({ editingDescription: false });
  }

  render() {
    if (!this.state.user) return null;
    let userType;
    let descriptionTitle;
    let appointmentDogs;
    let editNumber;
    let editDescription;

    if (this.props.user._id === this.props.currentUser.id) {
      editNumber = (
        <button id="add-phone-number-btn" onClick={this.editNumber}>
          +
        </button>
      );

      editDescription = (
        <button id="user-description-edit-btn" onClick={this.editDescription}>
          ✎ Edit
        </button>
      );
    }

    if (this.props.user.type === "adopter") {
      userType = "adopter";
      descriptionTitle = "Notes to Self";

      // determine which dogs (if any) adopter has booked appointment with
      if (this.props.dogs && this.props.dogs.length > 0) {
        appointmentDogs = this.props.dogs.filter((dog) => {
          return (
            dog.appointments.length > 1 &&
            dog.appointments.some((appointment) => {
              return appointment.adopterId === this.state.user.id;
            })
          );
        });
      }
    } else {
      userType = "shelter";
      descriptionTitle = "Description";
    }

    return (
      <div className={`user-main ${userType}-main`}>
        <div className={`user-details ${userType}-details`}>
          <h2>{this.props.user.username}</h2>

          {this.props.user.type === "shelter" &&  this.props.currentUser.type === 'adopter' ? 
          <Room pageId={this.props.user._id} currentUser={this.props.currentUser}/> : null}
          
          {/* {userType === "shelter" && <button>Message </button>} */}

          <h3>Contact Email</h3>
          <p>{this.props.user.email}</p>

          <div className="user-phone-number-header">
            <h3>Phone Number</h3>
            {editNumber}
            {/* <button id="add-phone-number-btn" onClick={this.editNumber}>+</button> */}
          </div>

          {this.state.editingNumber ? (
            <form onSubmit={this.submitNumber}>
              <input
                id="users-number"
                type="text"
                value={this.state.phoneNumber || ""}
                placeholder={
                  (this.state.phoneNumber.length > 1 &&
                    this.state.phoneNumber) ||
                  "514-228-2983"
                }
                onChange={this.changeNumber}
              />
              <input type="submit" value="Update Phone Number" />
            </form>
          ) : (
            <p>{this.props.user.phone_number || ""}</p>
          )}

          <h3>Location</h3>
          <p>
            <span id="user-location">{this.props.user.location}</span>
          </p>

          <div className="user-description-header">
            <h3 className="user-description">{descriptionTitle}</h3>
            {editDescription}
            {/* <button
              id="user-description-edit-btn"
              onClick={this.editDescription}
            >
              ✎ Edit
            </button> */}
          </div>

          {this.state.editingDescription ? (
            <form onSubmit={this.submitDescription}>
              <textarea
                cols="40"
                rows="10"
                onChange={this.changeDescription}
                placeholder={this.props.user.description}
              ></textarea>
              <input type="submit" value="Update Description" />
            </form>
          ) : (
            <p>{this.props.user.description}</p>
          )}

          {userType === "shelter" && this.props.currentUser.id === this.props.user._id && (
            <AppointmentList
              dogs={this.props.dogs}
              pageUser={this.props.user}
              currentUser={this.props.currentUser}
            />
          )}
        </div>

        <div className="user-specific">
          {userType === "adopter" && (
            <AdopterAppointmentsContainer dogs={appointmentDogs} />
          )}

          {userType === "shelter" && (
            <ShelterDogs
              dogs={this.props.dogs}
              pageUser={this.props.user}
              currentUser={this.props.currentUser}
              destroyDog={this.props.destroyDog}
              fetchDogs={this.props.fetchDogs}
            />
          )}
        </div>
      </div>
    );
  }
}

export default UserShow;
