import React from "react";
import DogIndexItem from "./dog_index_item";

class DogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "all",
      gender: "all",
      breed: "all",
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
    this.setState({ breed: e.currentTarget.value });
  }

  handleGenderChange(e) {
    e.preventDefault();
    this.setState({ gender: e.target.value });
  }

  // do a handle change for update field

  componentDidMount() {
    this.props.fetchDogs();
  }

  render() {
    const { dogs } = this.props;
    const filteredDogs = dogs.map((dog) => {
      if (
        this.state.gender === "all" &&
        this.state.breed === "all" &&
        this.state.age === "all"
      ) {
        return <DogIndexItem key={dog._id} dog={dog} />;
      } else if (
        (this.state.gender === "all" &&
          this.state.age === "all" &&
          dog.breed === this.state.breed) ||
        (this.state.age === "all" &&
          this.state.breed === "all" &&
          dog.gender === this.state.gender) ||
        (this.state.age === "all" &&
          dog.breed === this.state.breed &&
          dog.gender === this.state.gender)
      ) {
        return <DogIndexItem key={dog._id} dog={dog} />;
      } else if (
        (this.state.age === "1-4" && dog.age > 0 && dog.age <= 4) ||
        (this.state.age === "5-8" && dog.age >= 5 && dog.age <= 8) ||
        (this.state.age === "9-12" && dog.age >= 9 && dog.age <= 12) ||
        (this.state.age === "13-16" && dog.age >= 13 && dog.age <= 16)
      ) {
        if (this.state.gender === "all" && this.state.breed === "all") {
          return <DogIndexItem key={dog._id} dog={dog} />;
        } else if (
          this.state.gender === "all" &&
          dog.breed === this.state.breed
        ) {
          return <DogIndexItem key={dog._id} dog={dog} />;
        } else if (
          dog.gender === this.state.gender &&
          this.state.breed === "all"
        ) {
          return <DogIndexItem key={dog._id} dog={dog} />;
        } else if (
          dog.gender === this.state.gender &&
          this.state.breed === "all"
        ) {
          return <DogIndexItem key={dog._id} dog={dog} />;
        }
      }
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
                <option value="dalmation">Dalmatian</option>
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
        <div className="dog-list-container">{filteredDogs}</div>
      </div>
    );
  }
}

export default DogIndex;
