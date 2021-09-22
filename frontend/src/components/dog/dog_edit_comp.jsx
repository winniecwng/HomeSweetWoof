import React from "react";
import { withRouter } from "react-router";

class DogEditComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.dog;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToDogIndex = this.navigateToDogIndex.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchDog(this.props.dogId);
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editDog(this.state);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ gender: e.target.value });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  navigateToDogIndex() {
    const url = `/dogs`;
    this.props.history.push(url);
  }

  render() {
    return (
      <div className="edit-dog-form">
        <form onSubmit={this.handleSubmit} className="edit-form">
          {/* <h1>A New Dog Needs A New Home</h1> */}
          <label>
            <div>Name:</div>

            <input
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
            />
          </label>
          <label>
            <div>Breed:</div>

            <input
              type="text"
              value={this.state.breed}
              onChange={this.update("breed")}
            />
          </label>
          <label>
            <div>Age:</div>
            <input
              type="number"
              value={this.state.age}
              onChange={this.update("age")}
            />
          </label>
          <label>
            <div>Description:</div>

            <textarea
              type="text"
              value={this.state.description}
              onChange={this.update("description")}
            />
          </label>
          <label>
            <div>Appointments:</div>
            <input
              type="date"
              value={this.state.appointments}
              onChange={this.update("appointments")}
            />
          </label>
          <label>
            <div>Gender:</div>
            <select
              className="dog-gender"
              value={this.state.gender}
              onChange={this.handleChange}
            >
              <option value="Gender Preference" selected="true" disabled="true">
                Gender Preference
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <div className="edit-btn-container">
            <input
              type="submit"
              className="edit-dog-submit-button"
              value="submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(DogEditComp);
