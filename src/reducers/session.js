import { LOG_IN_SUCCESS, LOG_IN_ERROR, LOG_OUT } from '../constants';

export function session(state = false, action) {
  console.log('--- state: ', state);
  console.log('acrtion', action);

    switch (action.type) {
        case LOG_IN_SUCCESS:
            return true;
        case LOG_IN_ERROR || LOG_OUT:
            return false;
        default:
            return state;
    }
} 
