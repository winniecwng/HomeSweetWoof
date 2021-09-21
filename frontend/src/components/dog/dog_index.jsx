import React from "react";
import DogIndexItem from "./dog_index_item";

class DogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 1,
      gender: "female",
      breed: "husky",
    };

    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleBreedChange = this.handleBreedChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
  }

  handleAgeChange(e) {
    e.preventDefault();
    this.setState({ age: e.target.value });
  }
  handleBreedChange(e) {
    e.preventDefault();
    this.setState({ breed: e.target.value });
  }
  handleGenderChange(e) {
    e.preventDefault();
    this.setState({ gender: e.target.value });
  }

  componentDidMount() {
    this.props.fetchDogs();
  }

  render() {
    const { dogs } = this.props;
    const allDogs = dogs.map((dog) => {
      return <DogIndexItem key={dog._id} dog={dog} />;
      // dog.id may be dog._id; seen in MERN tweet.js
    });

    return (
      <div className="dogs-container">
        <div className="dog-index-bg">
          <p className="dog-home">
            <span>Every dog deserves a home</span>
            <span className="special">Find your special friend today</span>
          </p>
        </div>
        <div className="dog-search-filters">
          <div className="search-by-breed">
            <label>
              Select a Breed:
              <select
                name="dog-breed"
                value={this.state.breed}
                onChange={this.handleBreedChange}
              >
                <option defaultValue="all" value="all">
                  All
                </option>
                <option value="husky">Husky</option>
                <option value="dalmatian">Dalmatian</option>
                <option value="golden retriever">Golden Retriever</option>
                <option value="shiba inu">Shiba Inu</option>
                <option value="german shepherd">German Shepherd</option>
              </select>
            </label>
          </div>
          <div className="search-by-gender">
            <label>
              Select a Gender:
              <select
                className="dog-gender"
                value={this.state.gender}
                onChange={this.handleGenderChange}
              >
                <option defaultValue="all" value="all">
                  All
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>
          <div className="search-by-age">
            <label>
              Select an Age Range:
              <select
                name="dog-age"
                value={this.state.age}
                onChange={this.handleAgeChange}
              >
                <option defaultValue="all" value="all">
                  All
                </option>
                <option value="1-4">1-4</option>
                <option value="5-8">5-8</option>
                <option value="9-12">9-12</option>
                <option value="13-16">13-16</option>
              </select>
            </label>
          </div>
        </div>
        <div className="dog-list-container">{allDogs}</div>
      </div>
    );
  }
}

export default DogIndex;
