import * as UserApil from '../util/user_util'

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});


export const receiveUser = user => ({
    type: RECEIVE_USERS,
    user
});

export const fetchUser = user => dispatch => (
    UserApil.getUser()
)