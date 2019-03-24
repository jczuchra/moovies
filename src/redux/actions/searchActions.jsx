export const searchTitle = (req) => {
    return (dispatch, getState) => {
        const key = 'acc57a8c&';
        const URL = 'http://www.omdbapi.com/?apikey=';
        const title = 's=' + req.title;
        const endpoint = URL + key + title;
        fetch(endpoint)
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp.Search);
                dispatch({ type: 'REQUEST_SUCCESS', movies: resp.Search }
                )
            })
    }
}