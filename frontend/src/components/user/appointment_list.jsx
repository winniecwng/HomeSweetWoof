import React from "react";
import { Link } from "react-router-dom";

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
                    <div>
                        <div>{dog.name}</div>
                        {dog.appointments.map(appointment => {
                            return (      
                                <div>
                                    <div>
                                        <div>{(new Date(appointment.date)).toDateString()}</div>
                                        <div>{(new Date(appointment.date)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                    </div>
                                    <Link to={`/users/${appointment.user._id}`}>Message {appointment.user.username}</Link>
                                </div>
                            )
                        })}
                    </div>
                )
            });
        }

        return(
            <div>
                <h3>Appointments</h3>
                <div>
                    {filtered && filtered.length > 0 ? (
                        dog()
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