import { combineReducers } from "redux";
import dogsReducer from './dogs_reducer';
import usersReducer from './users_reducer';


const entitiesReducer = combineReducers({
    dogs: dogsReducer,
    users: usersReducer
});

export default entitiesReducer;