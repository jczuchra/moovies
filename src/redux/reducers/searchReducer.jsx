const initState = {
    movies: null
}

const searchReducer = (state = initState, action) => {
    if (action.type === 'REQUEST_SUCCESS')
        return {
            ...state,
            movies: action.movies
        }
    if (action.type === 'REQUEST_ERROR')
        return {
            ...state,
            searchError: action.error
        }
    return state
}

export default searchReducer;
