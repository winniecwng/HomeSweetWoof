import React from "react";


class UserShow extends React.Component {

    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    // }

    render() {
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

                {userType === adopter && (
                    <AdopterAppointmentsContainer />
                )}

                {userType === shelter && (
                    <ShelterDogsContainer />
                )}

            </div>
        )
    }

}


export default UserShow;