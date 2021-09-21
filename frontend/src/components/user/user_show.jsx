import React from "react";
import AdopterAppointmentsContainer from "./adoption_appointments_container";
import ShelterDogsContainer from "./shelter_dogs_container";


class UserShow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dogs: {},
            userType: ''
        }
    }

    componentDidMount() {
        const id = this.props.ownProps.match.params.id;

        this.props.fetchUser(id)
            .then(userResult => {
                if (userResult.user.data.type === 'shelter') {
                    this.props.fetchUserDogs(id)
                        .then(dogsResult => {
                            this.setState({ dogs: dogsResult.dogs.data });
                        });
                }
            });
    }

    render() {
        if(!this.props.user) return null;
        
        let userType;

        this.props.user.type === 'adopter' ? userType = 'adopter' : userType = 'shelter';

        // if(userType === 'shelter') {
        //     if(dogs) {

        //     }
        // }

        return (
            <div className={`user-main ${userType}-main`}>
                <div className={`user-details ${userType}-details`}>

                    <h2>{this.props.user.username}</h2>

                    {userType === 'shelter' && (
                        <button>Message </button>
                    )}

                    <h3>Contact Email</h3>
                    <p>{this.props.user.email}</p>

                    <h3>Phone Number</h3>
                    <p>{this.props.user.phone_number}</p>

                    <h3>Location</h3>
                    <p>{this.props.user.location}</p>

                    <p>{this.props.user.discription}</p>
                </div>

                <div className="user-specific">
                    {userType === 'adopter' && (
                        <AdopterAppointmentsContainer />
                    )}

                    {userType === 'shelter' && (
                        <ShelterDogsContainer 
                            dogs={this.state.dogs}
                            user={this.props.user} />
                    )}
                </div>
            </div>
        )
    }

}


export default UserShow;
