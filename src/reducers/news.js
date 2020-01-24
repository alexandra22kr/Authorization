import { NEWS_FETCH_DATA_SUCCESS, NEWS_IS_LOADING, NEWS_HAS_ERRORED } from '../constants';

export function newsHasErrored(state = false, action) {
    switch (action.type) {
        case NEWS_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
} 

export function newsIsLoading(state = false, action) {
    switch (action.type) {
        case NEWS_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function news(state = [], action) {
    switch (action.type) {
        case NEWS_FETCH_DATA_SUCCESS: {
            return [ ...action.news ];
        }

        default: 
            return state;
    }
}