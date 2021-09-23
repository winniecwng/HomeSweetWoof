import React from "react";
import { Link } from "react-router-dom";
import Room from "../client_socketio/room";

class AppointmentList extends React.Component {
    render() {
        let dog;
        let filtered;

        if (Array.isArray(this.props.dogs)) {
            filtered = this.props.dogs.filter(dog => dog.user === this.props.pageUser._id && dog.appointments.length > 0)
        }

        dog = () => {
            return filtered.map(dog => {
                return (
                    <>
                        {dog.appointments.map(appointment => {
                            return (      
                                <div className="shelter-appointment">
                                    <div>
                                        <p id="shelter-appt-dog">
                                            {dog.name} 
                                            <i class="fas fa-paw"></i>
                                        </p>
                                        <div>{(new Date(appointment.date)).toDateString()}</div>
                                        <div>{(new Date(appointment.date)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                    </div>
                                    <div className="display-appointment-adopter">
                                        <h4>{appointment.user.username}</h4>
                                        <Link to={`/users/${appointment.user._id}`} className="message-adopter-link">
                                            <button className="message-adopter-btn">Message</button> </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
            });
        }

        return(
            <div>
                <h3>Appointments</h3>
                <div>
                    {filtered && filtered.length > 0 ? (
                        <div className="shelters-appointments">
                            {dog()}
                        </div>
                    ) : (
                        <div>
                            You have no upcoming appointments.
                        </div>
                    )}
                </div>
            </div>
            
        )
    }
}


export default AppointmentList;