import {
    NEWS_FETCH_DATA_SUCCESS,
    NEWS_IS_LOADING,
    NEWS_HAS_ERRORED
} from '../constants';

const initialState = [{
    user: 'admin',
    password: '12345'
}];

export function users(state = initialState, action) {
    return state;
}