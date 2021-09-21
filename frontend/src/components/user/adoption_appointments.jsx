import React from "react";


class AdopterAppointments extends React.Component {
    
    render() {
        const user = this.props.user; //later, user should be the shelter

        const appointments = () => {
            return this.props.user.appointments.map(appointment => {
                return (
                    <div className='appointment'>
                        <h3>{user.username}</h3>
                        {appointment.time}
                        {user.location}
                    </div>
                )
            });
        }

        return (
            <div className='adopter-appointments'>
                <h2>Appointments Booked</h2>

                {this.props.user.appointments ? (
                    appointments()
                ) : (
                    <div id='no-appointments'>
                        You haven't booked any appointments.
                    </div>
                )}
            </div>
        )
    }
}


export default AdopterAppointments;