import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; 
import { users } from './users';
import { news, newsIsLoading, newsHasErrored } from './news';
import { session } from './session';

const rootReducer = combineReducers({
    routing: routerReducer,
    users,
    news,
    session,
    newsIsLoading, 
    newsHasErrored
});

export default rootReducer;