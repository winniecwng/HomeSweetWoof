import React from "react";


class ShelterDogs extends React.Component {

    render() {
        const dogs = () => {
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

        return(
            <div className='shelter-dogs'>
                <h2>Dogs for Adoption</h2>

                <div className="shelter-dogs-inner-container">
                    {this.props.dogs.length > 0 ? (
                        dogs()
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