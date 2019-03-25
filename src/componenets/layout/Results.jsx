import React from 'react';
import { connect } from 'react-redux';
import SingleResult from './SingleResult';
import { getNextPage } from '../../redux/actions/searchActions';
let a = 1;
function Results({ movies, total, getNextPage }) {
    console.log(movies);
    const result = !movies ? <div className="container"><h3 className="center">No results</h3></div> : movies.map((movie, index) => { // I've made '!movies' because I wanted return 'No results' as first, cuz it looks better
        if (index === movies.length - 1)
            return <SingleResult key={movie.imdbID} movie={movie} trigger={"trigger" + a} />
        else
            return <SingleResult key={movie.imdbID} movie={movie} />
    })
    const pagesNumber = total ? Math.ceil(total / 10) : 1;
    const trigger = document.querySelector('.trigger' + a) ? console.log(document.querySelector('.trigger' + a)) : null;
    if (trigger && trigger.offsetTop > (window.scrollY + window.innerHeight) && a < pagesNumber) {
        console.log('Im in');
        a++;
        getNextPage(a);
    };
    return (
        <div className="movieResult">
            {result}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        movies: state.search.movies,
        total: state.search.total
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        getNextPage: pageNumber => dispatch(getNextPage(pageNumber))
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Results);
