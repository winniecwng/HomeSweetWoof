import { connect } from "react-redux";
import { fetchDogs } from "../../actions/dog_actions";
import AdopterAppointments from "./adoption_appointments";


const mSTP = state => ({
    user: state.session.user,
    dogs: state.entities.dogs
});

const mDTP = dispatch => ({
    fetchDogs: () => dispatch(fetchDogs())
});


export default connect(mSTP, mDTP)(AdopterAppointments);