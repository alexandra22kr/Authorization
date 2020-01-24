import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; 
import { users } from './users';
import { news, newsIsLoading, newsHasErrored } from './news';

const rootReducer = combineReducers({
    routing: routerReducer,
    users,
    news,
    newsIsLoading, 
    newsHasErrored
});

export default rootReducer;