import React from "react";
import { Link } from "react-router-dom";


class ShelterDogs extends React.Component {

    deleteDog(e){
        this.props.destroyDog(e.currentTarget.id).then(()=> window.location.reload(false))
    }

    render() {
        let dog;

        let filtered;
        if (Array.isArray(this.props.dogs)) {
            filtered = this.props.dogs.filter(dog => dog.user === this.props.pageUser._id)
        }

        dog = () => {
            return filtered.map(dog => {
                return (
                    <div className='shelter-dog-container'
                        key={`shelterdogs-${dog._id}`}>
                        <div className="shelter-dogs-pic">
                            {this.props.pageUser._id === this.props.currentUser.id && (
                                <button id={dog._id} 
                                onClick={this.deleteDog.bind(this)}
                                className="shelter-delete-dog-btn">
                                    X
                                </button>

                            )}
                        </div>
                        <h4>{dog.name}</h4>
                        <p>{dog.breed} {dog.gender}</p>
                        <p>{dog.age} years old</p>
                    </div>
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