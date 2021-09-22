import { connect } from "react-redux";
// import { withRouter } from "react-router";
import AdopterAppointments from "./adoption_appointments";


const mSTP = (state, ownProps) => ({
    user: state,
    dogs: ownProps.dogs
});

// const mDTP = dispatch => ({
//     // 
// });


export default connect(mSTP, null)(AdopterAppointments);