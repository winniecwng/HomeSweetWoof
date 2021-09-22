import { connect } from "react-redux";
import ShelterDogs from "./shelter_dogs";


const mSTP = (state, ownProps) => ({
    // dogs: ownProps.dogs,
    // user: ownProps.user
});

// const mDTP = dispatch => ({
    
// })


export default connect(mSTP, null)(ShelterDogs);