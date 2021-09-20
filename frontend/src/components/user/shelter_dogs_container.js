import { connect } from "react-redux";
import ShelterDogs from "./shelter_dogs";


const mSTP = (state, ownProps) => ({
    temp: "temp"
});

// const mDTP = dispatch => ({
    
// })


export default connect(mSTP, null)(ShelterDogs);