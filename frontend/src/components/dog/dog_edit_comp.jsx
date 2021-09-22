import React from "react";
import { withRouter } from "react-router";
import ModalContainer from "../modal/modal_container";

class DogEditComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.dog;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToDogIndex = this.navigateToDogIndex.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
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

  handleUpload(e){
      e.preventDefault();
      debugger
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
        this.setState({photoFile: file, photoUrl: fileReader.result})
    }
    if (file){
        fileReader.readAsDataURL(file)
    }
    
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
        {/* <ModalContainer dogId={this.props.ownProps.match.params.id} /> */}
        
        <form
          onSubmit={this.handleSubmit}
          className="edit-form ignore-modal-close"
        >
            
          {/* <h1>A New Dog Needs A New Home</h1> */}
          <label className="ignore-modal-close">
            <div className="ignore-modal-close">Name:</div>

            <input
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              className="ignore-modal-close"
            />
          </label>
          <input type="file" name="photo" className="ignore-modal-close" onChange={this.handleUpload} accept="image/jpeg, image/png"/>
          <label className="ignore-modal-close">
            <div className="ignore-modal-close">Breed:</div>

            <input
              type="text"
              value={this.state.breed}
              onChange={this.update("breed")}
              className="ignore-modal-close"
            />
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
            <div>Appointments:</div>
            <input
              type="date"
              value={this.state.appointments}
              onChange={this.update("appointments")}
              className="ignore-modal-close"
            />
          </label>
          <label className="ignore-modal-close">
            <div className="ignore-modal-close">Gender:</div>
            <select
              className="dog-gender"
              value={this.state.gender}
              onChange={this.handleChange}
              className="ignore-modal-close"
            >
              <option
                value="Gender Preference"
                selected="true"
                disabled="true"
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
              onClick={this.handleSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(DogEditComp);
