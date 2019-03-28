const key = 'acc57a8c&';

export const searchTitle = (req) => {
    return (dispatch, getState) => {
        const URL = 'http://www.omdbapi.com/?apikey=';
        const title = 's=' + req.title;
        const endpoint = URL + key + title;

        fetch(endpoint)
            .then(resp => resp.json())
            .then(resp => {
                dispatch({ type: 'SEARCH_REQUEST_SUCCESS', movies: resp.Search, total: resp.totalResults, pageNumber: 1, title: req.title }
                )
            })
            .catch(error => dispatch({ type: 'SEARCH_REQUEST_FAILED', error }))
    }
}

export const getNextPage = (pageNumber) => {
    return (dispatch, getState) => {
        const state = getState();
        const URL = 'http://www.omdbapi.com/?apikey=';
        const title = 's=' + state.search.title;
        const page = "&page=" + pageNumber;
        const endpoint = URL + key + title + page;
        fetch(endpoint)
            .then(resp => resp.json())
            .then(resp => {
                dispatch({ type: 'PAGE_REQUEST_SUCCESS', movies: [...state.search.movies, ...resp.Search], pageNumber })
            })
            .catch(error => dispatch({ type: 'PAGE_REQUEST_FAILED', error }))

    }
}

export const getTitleInfo = movieId => {
    return (dispatch, getState) => {
        const URL = 'http://www.omdbapi.com/?apikey=';
        const id = "&i=" + movieId;
        const endpoint = URL + key + id;
        fetch(endpoint)
            .then(resp => resp.json())
            .then(resp => dispatch({ type: 'TITLE_INFO_REQUEST_SUCCESS', titleInfo: resp }))
            .catch(error => dispatch({ type: 'TITLE_INFO_REQUEST_FAILED', error }))

    }
}