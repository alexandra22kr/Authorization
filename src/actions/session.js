import { LOG_IN_SUCCESS, LOG_IN_ERROR, LOG_OUT } from '../constants';

export function logIn(user) {
    return {
        type: LOG_IN_SUCCESS,
        user
    };
}

export function logOut() {
    return {
        type: LOG_OUT
    };
}