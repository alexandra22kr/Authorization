import { LOG_IN_SUCCESS, LOG_IN_ERROR, LOG_OUT } from '../constants';

const initialState = [
    {
        user: 'admin',
        password: '12345'
    }
];

export function logIn(state = {}, action) {
    switch (action.type) {
        case NEWS_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
} 

export function logOut() {
  return {
    type: LOG_OUT,
  }
}