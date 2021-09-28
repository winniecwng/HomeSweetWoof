import React from "react";
import { Link } from "react-router-dom";


class ShelterDogs extends React.Component {

    deleteDog(e){
        this.props.destroyDog(e.currentTarget.id)
        .then(() => this.props.fetchDogs())
    }

    render() {
        let dog;
        let filtered;
        
        if (Array.isArray(this.props.dogs)) {
            filtered = this.props.dogs.filter(dog => {
                return dog.user === this.props.pageUser._id
            });
        }

        dog = () => {
            return filtered.map(dog => {
                return (
                    // <>
                    <div className='shelter-dog-container'
                        key={`shelterdogs-${dog._id}`}>
                        <div className="shelter-dogs-pic">
                        <Link to={`/dogs/${dog._id}`} >
                            <img src={dog.photo} alt="the dog" className="dog-show-img" />
                        </Link>
                        </div>

                        <Link to={`/dogs/${dog._id}`} 
                            className="shelter-dogs-clickable">
                            <h4>{dog.name}</h4>
                            <p>{dog.breed} {dog.gender}</p>
                            <p>{dog.age} years old</p>
                        </Link>
                        {
                        this.props.pageUser._id === this.props.currentUser.id && (
                            <button id={dog._id}
                                onClick={this.deleteDog.bind(this)}
                                className="shelter-delete-dog-btn">
                                    <i class="far fa-trash-alt"></i>
                            </button>

                        )
                    }
                    </div>

                    
                    // </>
                )
            });
        }

        return(
            <div className='shelter-dogs'>
                <div className="shelter-dogs-header">
                    <h2>Dogs for Adoption</h2>

                    {this.props.pageUser._id === this.props.currentUser.id && (
                        <Link to="/dogs/new">
                            <button className="add-dog">
                                + List A Dog
                            </button>
                        </Link>
                    )}
                </div>

                <div className="shelter-dogs-inner-container">
                    {filtered && filtered.length > 0 ? (
                        dog()
                    ) : (
                        <div id='no-dogs'>
                            Your shelter has no dogs listed.
                        </div>
                    )}
                </div>
             </div>
        )
    }
}


export default ShelterDogs;