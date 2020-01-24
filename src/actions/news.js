import { NEWS_FETCH_DATA_SUCCESS, NEWS_IS_LOADING, NEWS_HAS_ERRORED } from '../constants';

export function newsHasErrored(bool) {
    return {
        type: NEWS_HAS_ERRORED,
        hasErrored: bool
    };
}

export function newsIsLoading(bool) {
    return {
        type: NEWS_IS_LOADING,
        isLoading: bool
    };
}

export function newsFetchDataSuccess(news) {
    return {
        type: NEWS_FETCH_DATA_SUCCESS,
        news
    };
}

export function newsFetchData(url) {
    return (dispatch) => {
        dispatch(newsIsLoading(true));
        console.log('url', url);

            fetch(url) 
            .then((response) => {
                if (!response.ok) { 
                    throw Error(response.statusText);
                }

                dispatch(newsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((news) => {
                dispatch(newsFetchDataSuccess(news.articles))
                console.log('data', news);
            })
            .catch(() => dispatch(newsHasErrored(true)));
    };
}