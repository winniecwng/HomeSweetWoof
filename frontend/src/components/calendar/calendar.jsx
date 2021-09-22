import React from 'react';

// DATE PICKER
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays';
// import setHours from "date-fns/setHours";
import "react-datepicker/dist/react-datepicker.css";


class Calendar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            appointment: {
                user: null,
                date: new Date()
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let appointment = {};
        appointment.user = this.props.user;
        appointment.date = new Date();
        this.setState({ appointment: appointment });
    }

    handleSubmit(e) {
        e.preventDefault();
        const dog = {...this.props.dog};
        dog.appointments.push(this.state.appointment);
        this.props.editDog(dog)
            .then(result => this.setState({ 
                appointment: {
                    user: this.props.user,
                    date: new Date()
                }
            }));
    }

    render() {
        const dog = this.props.dog;

        return(
            <div className='calendar'>
                <h3>Book an Appointment</h3>
                <div className='datepicker'>
                    <DatePicker 
                        selected={this.state.appointment.date}
                        showTimeSelect
                        inline
                        minDate={new Date()}
                        maxDate={addDays(new Date(), 180)}
                        // excludeTimes={dog.appointments}
                        onChange={date => {
                            let appointment = {...this.state.appointment};
                            appointment.date = date;
                            this.setState({ appointment: appointment });
                        }} 
                        />
                </div>
                <button onClick={this.handleSubmit}>
                    Book Appointment
                </button>
            </div>
        )
    }
}


export default Calendar;