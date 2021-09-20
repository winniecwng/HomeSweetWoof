import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, state, action.users)
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.data['id']]: action.user.data })
        default:
            return state;
    }
  };
  
  export default UsersReducer;