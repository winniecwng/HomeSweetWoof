import { connect } from "react-redux";
import AdopterAppointments from "./adoption_appointments";


const mSTP = state => ({
    user: state,
    dogs: state.entities.dogs
});

export default connect(mSTP, null)(AdopterAppointments);