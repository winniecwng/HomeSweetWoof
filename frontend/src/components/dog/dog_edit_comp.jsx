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
      <div className="edit-dog-form ignore-modal-close">
        <form
          onSubmit={this.handleSubmit}
          className="edit-form ignore-modal-close"
        >
          <label className="ignore-modal-close">
            <div className="ignore-modal-close">Name:</div>

            <input
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              className="ignore-modal-close"
            />
          </label>

          <label className="ignore-modal-close">
            <div className="ignore-modal-close">Breed:</div>
            <select
              value={this.state.breed}
              onChange={this.update("breed")}
              className="ignore-modal-close" >

              <option 
                className="ignore-modal-close" 
                value="husky">
                  Husky
              </option>
              <option 
                className="ignore-modal-close" 
                value="dalmatian">
                  Dalmatian
              </option>
              <option 
                className="ignore-modal-close" 
                value="golden retriever">
                  Golden Retriever
              </option>
              <option 
                className="ignore-modal-close" 
                value="shiba inu">
                  Shiba Inu
              </option>
              <option 
                className="ignore-modal-close" 
                value="german shepherd">
                  German Shepherd
              </option>
              {/* <option 
                className="ignore-modal-close" 
                value="other">
                  Other
              </option> */}
            </select>
          </label>

          <label className="ignore-modal-close">
            <div className="ignore-modal-close">Age:</div>
            <input
              type="number"
              value={this.state.age}
              onChange={this.update("age")}
              className="ignore-modal-close"
            />
          </label>
          <label className="ignore-modal-close">
            <div className="ignore-modal-close">Description:</div>

            <textarea
              type="text"
              value={this.state.description}
              onChange={this.update("description")}
              className="ignore-modal-close"
            />
          </label>
          
          <label className="ignore-modal-close">
            <div className="ignore-modal-close">Gender:</div>
            <select
              className="dog-gender ignore-modal-close"
              value={this.state.gender}
              onChange={this.handleChange} >
              <option
                value="Gender Preference"
                selected="selected"
                disabled
                className="ignore-modal-close"
 >
                Gender Preference
              </option>
              <option value="male" className="ignore-modal-close">
                Male
              </option>
              <option value="female" className="ignore-modal-close">
                Female
              </option>
            </select>
          </label>
          <div className="edit-btn-container">
            <input
              type="submit"
              className="edit-dog-submit-button"
              value="submit"
              onClick={this.handleSubmit} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(DogEditComp);
