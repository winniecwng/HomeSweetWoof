import React from "react";
import { withRouter } from "react-router";

class DogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      name: "",
      breed: "other",
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
    if (this.state.age === "" || 
        this.state.name === "" || 
        !this.state.photoFile || 
        !this.state.photoUrl) {
        window.alert("Please fill out all fields");
    } else {
      const formData = new FormData();
      formData.append("age", this.state.age)
      formData.append("name", this.state.name)
      formData.append("breed", this.state.breed)
      formData.append("gender", this.state.gender)
      formData.append("photo", this.state.photoFile)
      formData.append("description", this.state.description)

      this.props.composeDog(formData);
      this.setState({ age: "", name: "", breed: "", gender: "female", description: "", photoFile: null, photoUrl: null });
    }
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
    const preview = this.state.photoUrl ? <img className = "preview" src={this.state.photoUrl} alt="preview" /> :null

    return (
      <div className="create-new-dog">
        <form onSubmit={this.handleSubmit} className="create-dog-form">
          <h1>A New Dog Needs A New Home</h1>
          <input 
            type="file" 
            name="photo" 
            onChange={this.handleUpload} 
            accept="image/jpeg, image/png"/>
            <div>{preview}</div>

          <label>
            <div className="create-dog-label">Name:</div>
            <input
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
            />
          </label>

          <label>
            <div className="create-dog-label">Breed:</div>
            <select
              value={this.state.breed}
              onChange={this.update("breed")} >

              <option
                value="other"
                disabled >
                Select a Breed
              </option>

              <option value="husky">Husky</option>
              <option value="dalmatian">Dalmatian</option>
              <option value="golden retriever">Golden Retriever</option>
              <option value="shiba inu">Shiba Inu</option>
              <option value="german shepherd">German Shepherd</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label>
            <div className="create-dog-label">Age:</div>
            <input
              type="number"
              value={this.state.age}
              onChange={this.update("age")}
            />
          </label>

          <label>
            <div className="create-dog-label">Description:</div>
            <textarea
              type="text"
              value={this.state.description}
              onChange={this.update("description")}
            />
          </label>

          <label>
            <div className="create-dog-label">Gender:</div>
            <select
              className="dog-gender"
              value={this.state.gender}
              onChange={this.handleChange} >

              <option 
                value="Gender Preference" 
                selected="true" 
                disabled="true">
                Gender Preference
              </option>

              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <input type="submit" className="add-dog-submit-button" />
        </form>
      </div>
    );
  }
}

export default withRouter(DogForm);
