import React from "react";
import { Link } from "react-router-dom";
import CancelAppointmentContainer from "./cancel_appointment_container";


class AdopterAppointments extends React.Component {

    render() {
        const dogs = this.props.dogs;
        const user = this.props.user;

        const appointments = () => {
            if(dogs && dogs.length > 0) {
                return dogs.map(dog => {
                    return dog.appointments.map(appointment => {
                        if (appointment.user && (
                            appointment.user._id === user.id)) {
                            return(
                                <div key={`adopter-appmt-${appointment.date}${dog._id}`}
                                    className="adopter-appointment">
                                    <Link to={`/dogs/${dog._id}`}>
                                        <h3>{dog.name} <i className="fas fa-dog"></i></h3>
                                    </Link>
                                    <p>
                                        {(new Date(appointment.date)).toDateString()}
                                    </p>
                                    <p>
                                        {(new Date(appointment.date)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>

                                    <CancelAppointmentContainer 
                                        dog={dog} 
                                        date={appointment.date}
                                        fetchDogs={this.props.fetchDogs} />
                                </div>
                            )
                        } else {
                            return null;
                        }
                    });
                });
            } 
        }

        return (
            <div className='adopter-appointments'>
                <h2>Appointments Booked</h2>

                <div className="adopter-appointments-container">
                    {appointments()}
                </div>
            </div>
        )
    }
}


export default AdopterAppointments;