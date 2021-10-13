# HomeSweetWoof
### [Live](https://homesweetwoof.herokuapp.com/#/)

## Team Members
* [Alex Lam](https://github.com/alexsaintlam)
* [Julian Kang](https://github.com/juka1031) 
* [Kira Porter](https://github.com/kierxin)
* [Winnie Ng](https://github.com/WinnieNg3210)

## Overview

![HOW - splash](https://user-images.githubusercontent.com/82779931/134609901-c477e222-c48e-4af6-8b03-27ebef3040ba.JPG)

Home Sweet Woof is a fullstack MERN application that connects adopters to dog shelter organizations. Users can sign up as either an adopter or a shelter organization. Depending on the login credentials, the user has access to different types of functionality. Adopters can look through dog listings and make an appointment with dog shelters. Shelter organizations can add adoptable dogs to the list and update the dog's information. Both users can communicate with each other in real-time through a chat box.

## Main Features

Home Sweet Woof has an appointment booking feature that utilizes DatePicker from the React library. DatePicker is a reusable React component to display dates using a calendar dialog. The local state in the calendar class is set to conditionally render appointments for both shelters and adopters. 

```...javascript
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

```
