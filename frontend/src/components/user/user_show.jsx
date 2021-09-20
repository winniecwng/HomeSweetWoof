import React from "react";
import AdopterAppointmentsContainer from "./adoption_appointments_container";
import ShelterDogsContainer from "./shelter_dogs_container";


class UserShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
        // this.props.fetchUser(this.props.ownProps.match.params.id);
    }

    render() {
        if(!this.props.user) return null;

        let userType;
        this.props.user.type === 'adopter' ? userType = 'adopter' : userType = 'shelter'

        return (
            <div className={`user-main ${userType}-main`}>
                <div className={`user-details ${userType}-details`}>
                    <h2>{this.props.user.username}</h2>

                    <h3>Contact Email</h3>
                    <p>{this.props.user.email}</p>

                    <h3>Phone Number</h3>
                    <p>{this.props.user.phone_number}</p>

                    <h3>Location</h3>
                    <p>{this.props.user.location}</p>

                    <p>{this.props.user.discription}</p>
                </div>

                {userType === 'adopter' && (
                    <AdopterAppointmentsContainer />
                )}

                {userType === 'shelter' && (
                    <ShelterDogsContainer />
                )}

            </div>
        )
    }

}


export default UserShow;