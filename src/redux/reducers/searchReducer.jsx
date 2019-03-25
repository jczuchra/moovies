const initState = {
    movies: null
}

const searchReducer = (state = initState, action) => {
    if (action.type === 'SEARCH_REQUEST_SUCCESS')
        return {
            ...state,
            movies: action.movies,
            total: action.total,
            title: action.title
        }
    if (action.type === 'PAGE_REQUEST_SUCCESS')
        return {
            ...state,
            movies: action.movies
        }
    if (action.type === 'SEARCH_REQUEST_ERROR')
        return {
            ...state,
            searchError: action.error
        }
    if (action.type === 'PAGE_REQUEST_ERROR')
        return {
            ...state,
            searchError: action.error
        }
    return state
}

export default searchReducer;
