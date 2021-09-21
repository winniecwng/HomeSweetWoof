import React from "react";
import { withRouter } from "react-router";

class DogEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.dog

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToDogIndex = this.navigateToDogIndex.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editDog(this.state);
    // this.navigateToDogIndex();
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
      <div className="create-new-dog">
        <form onSubmit={this.handleSubmit}>
          <h1>A New Dog Needs A New Home</h1>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
            />
          </label>
          <label>
            Breed:
            <input
              type="text"
              value={this.state.breed}
              onChange={this.update("breed")}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              value={this.state.age}
              onChange={this.update("age")}
            />
          </label>
          <select
            className="dog-gender"
            value={this.state.gender}
            onChange={this.handleChange}
          >
            Gender:
            <option value="Gender Preference" selected="true" disabled="true">
              Gender Preference
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input type="submit" className="add-dog-submit-button" />
        </form>
      </div>
    );
  }
}

export default withRouter(DogEditForm);
