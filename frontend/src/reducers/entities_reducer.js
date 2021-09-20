import { combineReducers } from "redux";
import dogsReducer from './dogs_reducer';

const entitiesReducer = combineReducers({
    dogs: dogsReducer
});

export default entitiesReducer;