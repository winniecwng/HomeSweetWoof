import React from "react";
import { Link } from "react-router-dom";

class DogIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dog } = this.props;
    return (
      <div className="dog-info">
        {/* <Link to="{`dogs/${dog._id}`}"><div>Dog Image</div><Link/> */}
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
