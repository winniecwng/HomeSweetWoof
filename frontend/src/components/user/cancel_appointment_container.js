import { connect } from "react-redux";
import { editDog, fetchDogs } from "../../actions/dog_actions";
import CancelAppointment from "./cancel_appointment";


const mSTP = (state, ownProps) => ({
    dog: ownProps.dog,
    date: ownProps.date
});

const mDTP = dispatch => ({
    editDog: dog => dispatch(editDog(dog)),
    fetchDogs: () => dispatch(fetchDogs())
});


export default connect(mSTP, mDTP)(CancelAppointment);