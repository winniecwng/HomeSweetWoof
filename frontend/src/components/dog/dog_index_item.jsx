import React from "react";
import { Link } from "react-router-dom";

class DogIndexItem extends React.Component {

  render() {
    const { dog } = this.props;
    return (
      <div className="dog-info">
        <div className="dog-index-pic">
          <Link to={`/dogs/${dog._id}`}>
            <img src={dog.photo[0]} alt="the dog" className="dog-img" />
          </Link>
        </div>

        <div className="dog-description">
          <p>Name: {dog.name}</p>
          <p>Breed: {dog.breed}</p>
          <p>Age: {dog.age}</p>
          <p>Gender: {dog.gender}</p>
        </div>
      </div>
    );
  }
}

export default DogIndexItem;
