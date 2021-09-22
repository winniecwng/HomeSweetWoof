import React from "react";


class ShelterDogs extends React.Component {


    deleteDog(e){
        this.props.destroyDog(e.currentTarget.id).then(()=> window.location.reload(false))
    }

    render() {
        let dog;

        if(this.props.pageUser._id === this.props.currentUser.id) {
            dog = () => {
                return this.props.dogs.map(dog => {
                    return (
                        <div className='shelter-dog-container'
                            key={`shelterdogs-${dog._id}`}>
                            <div className="shelter-dogs-pic"></div>
                            <button id={dog._id}onClick={this.deleteDog.bind(this)}>X</button>
                            <h4>{dog.name}</h4>
                            <p>{dog.breed} {dog.gender}</p>
                            <p>{dog.age} years old</p>
                        </div>
                    )
                });
            }
        } else {
            dog = () => {
                return this.props.dogs.map(dog => {
                    return (
                        <div className='shelter-dog-container'
                            key={`shelterdogs-${dog._id}`}>
                            <div className="shelter-dogs-pic"></div>
                            <h4>{dog.name}</h4>
                            <p>{dog.breed} {dog.gender}</p>
                            <p>{dog.age} years old</p>
                        </div>
                    )
                });
            }
        }

        return(
            <div className='shelter-dogs'>
                <h2>Dogs for Adoption</h2>

                <div className="shelter-dogs-inner-container">
                    {this.props.dogs.length > 0 ? (
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