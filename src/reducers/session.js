import { LOG_IN_SUCCESS, LOG_IN_ERROR, LOG_OUT } from '../constants';

export function session(state = true, action) {
    switch (action.type) {
        case LOG_IN_SUCCESS:
            // if()
            return true;
        case LOG_IN_ERROR || LOG_OUT:
            return false;
        default:
            return state;
    }
} 

export function logOut() {
  return {
    type: LOG_OUT,
  }
}