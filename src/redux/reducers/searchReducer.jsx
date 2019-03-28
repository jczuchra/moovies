import { access } from "fs";

const initState = {
    movies: null,
    titleInfo: null
}

const searchReducer = (state = initState, action) => {
    if (action.type === 'SEARCH_REQUEST_SUCCESS')
        return {
            ...state,
            movies: action.movies,
            total: action.total,
            title: action.title,
            pageNumber: action.pageNumber
        }
    if (action.type === 'PAGE_REQUEST_SUCCESS')
        return {
            ...state,
            movies: action.movies,
            pageNumber: action.pageNumber
        }
    if (action.type === 'TITLE_INFO_REQUEST_SUCCESS') {
        return {
            ...state,
            titleInfo: {
                ...state.titleInfo,
                [action.titleInfo.imdbID]: action.titleInfo
            }
        }
    }
    if (action.type === 'SEARCH_REQUEST_ERROR')
        return {
            ...state,
            searchError: action.error
        }
    if (action.type === 'PAGE_REQUEST_ERROR')
        return {
            ...state,
            pageError: action.error
        }
    if (action.type === 'TITLE_INFO_REQUEST_SUCCESS')
        return {
            ...state,
            titleInfoError: access.error
        }
    return state
}

export default searchReducer;
