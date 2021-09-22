import {
  RECEIVE_DOGS,
  RECEIVE_DOG,
  RECEIVE_NEW_DOG,
  REMOVE_DOG,
} from "../actions/dog_actions";

const DogsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_DOGS:
        newState = action.dogs.data;
        return newState;
    case RECEIVE_DOG:
        return newState[action.dog.id] = action.dog.data; //?????
    case RECEIVE_NEW_DOG:
        newState = action.dog.data;
        return newState;
    case REMOVE_DOG:
        delete newState[action.data.id]
        return newState;
    default:
        return state;
  }
};

export default DogsReducer;
