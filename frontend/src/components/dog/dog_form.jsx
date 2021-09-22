import React from "react";
import { withRouter } from "react-router";

class DogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      name: "",
      breed: "",
      gender: "female",
      description: "",
      photoFile: null,
      photoUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToDogIndex = this.navigateToDogIndex.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e){
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
        this.setState({photoFile: file, photoUrl: fileReader.result})
    }
    if (file){
        fileReader.readAsDataURL(file)
    }
    
}

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("age", this.state.age)
    formData.append("name", this.state.name)
    formData.append("breed", this.state.breed)
    formData.append("gender", this.state.gender)
    formData.append("photo", this.state.photoFile)
    formData.append("description", this.state.description)

    this.props.composeDog(formData);
    this.setState({ age: "", name: "", breed: "", gender: "female", description: "" });
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
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} alt="preview" /> :null
    return (
      <div className="create-new-dog">
        <form onSubmit={this.handleSubmit}>
          <h1>A New Dog Needs A New Home</h1>
          <input type="file" name="photo" onChange={this.handleUpload} accept="image/jpeg, image/png"/>
            <div>
                {preview} 
            </div>
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
          <label>
            Description:
            <textarea
              type="text"
              value={this.state.description}
              onChange={this.update("description")}
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

export default withRouter(DogForm);
