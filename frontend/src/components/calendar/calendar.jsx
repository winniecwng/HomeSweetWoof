import React from 'react';

// DATE PICKER
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";


class Calendar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            appointment: {
                user: null,
                date: null
            },
            lastBooked: null,
            booked: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const dog = {...this.props.dog};
        let appointment = ({
            date: this.state.appointment.date,
            user: this.props.user
        })
        dog.appointments.push(appointment);
        this.props.editDog(dog)
            .then(() => this.setState({ 
                appointment: {
                    user: this.props.user,
                    date: new Date()
                },
                lastBooked: this.state.appointment.date
            }));
        this.setState({ booked: true }, () => {
            setTimeout(() => {
                this.setState({ booked: false });
                this.setState({ lastBooked: null });
            }, 3000);
        });
    }

    render() {
        // const dog = this.props.dog;
        let booked;
        this.state.booked ? booked = 'booked-appt' : booked = 'not-booked-appt';
        const startDate = setHours(setMinutes(new Date(), 0), 9);
        const endDate = setHours(setMinutes(new Date(), 0), 17);

        return(
            <> 
                {this.props.user.type === 'adopter' && (
                    <div className='calendar'>
                        <div className='datepicker'>
                            <DatePicker
                                selected={this.state.appointment.date}
                                showTimeSelect
                                inline
                                minDate={new Date()}
                                maxDate={addDays(new Date(), 180)}
                                timeIntervals={60}
                                minTime={startDate}
                                maxTime={endDate}
                                onChange={date => {
                                    let appointment = { ...this.state.appointment };
                                    appointment.date = date;
                                    this.setState({ appointment: appointment });
                                }}
                            />
                        </div>
                        <div className="book-it-container">
                            <button onClick={this.handleSubmit} id="book-it">
                                Book Appointment
                            </button>
                            {this.state.lastBooked && (
                                <p id={booked}>Booked: <br /> {`
                                    ${(this.state.lastBooked).toDateString()} 
                                    ${(this.state.lastBooked).toLocaleTimeString(
                                        [], { hour: '2-digit', minute: '2-digit' }
                                    )}
                                `}</p>
                            )}
                        </div>
                    </div>
                )} 
            </>
        )
    }
}


export default Calendar;