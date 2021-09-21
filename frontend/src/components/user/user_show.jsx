import React from "react";
import AdopterAppointmentsContainer from "./adoption_appointments_container";
import ShelterDogsContainer from "./shelter_dogs_container";


class UserShow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dogs: {},
            userType: '',
            editingDescription: false,
            description: ''
        }

        this.editDescription = this.editDescription.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    editDescription(e) {
        e.preventDefault();
        this.setState({ editingDescription: !this.state.editingDescription });
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ description: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {...this.props.user};
        user.description = this.state.description;
        this.props.updateProfile(user);
        this.setState({ editingDescription: false });
    }

    render() {
        if(!this.props.user) return null;
        
        let userType;
        let descriptionTitle;

        if (this.props.user.type === 'adopter') {
            userType = 'adopter';
            descriptionTitle = 'Notes to Self';
        } else {
            userType = 'shelter';
            descriptionTitle = 'Description';
        }

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

                    <div className="user-description-header">
                        <h3 className="user-description">{descriptionTitle}</h3>
                        <button 
                            id='user-description-edit-btn'
                            onClick={this.editDescription}>
                                ✎ Edit 
                            </button>
                    </div>

                    {this.state.editingDescription ? (
                        <form onSubmit={this.handleSubmit}>
                            <textarea 
                                cols="40" rows="10"
                                onChange={this.handleChange}>
                            </textarea>
                            <input type="submit" />
                        </form>
                    ) : (
                        <p>{this.props.user.description}</p>
                    )}
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