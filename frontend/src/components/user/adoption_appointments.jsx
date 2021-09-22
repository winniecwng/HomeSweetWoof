import React from "react";
import { Link } from "react-router-dom";


class AdopterAppointments extends React.Component {
    
    render() {
        const dogs = this.props.dogs;
        const user = this.props.user;

        const appointments = () => {
            if(dogs && dogs.length > 0) {
                return dogs.map(dog => {
                    return dog.appointments.map(appointment => {
                        if (appointment.user && (
                            appointment.user.id === user.id)) {

                            return(
                                <div key={`adopter-appmt-${user.id}${dog.id}`}
                                    className="adopter-appointment">
                                    <Link to={`/dogs/${dog._id}`}>
                                        <h3>{dog.name}</h3>
                                    </Link>
                                    <p>
                                        {(new Date(appointment.date)).toDateString()}
                                    </p>
                                    <p>
                                        {(new Date(appointment.date)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                </div>
                            )
                        } else {
                            return null;
                        }
                    });
                });
            } else {
                return(
                    <div id='no-appointments'>
                        You haven't booked any appointments.
                    </div>
                )
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