import React from 'react';
import { connect } from 'react-redux';
import SingleResult from './SingleResult';

function Results({ movies }) {
    const result = !movies ? <h3 className="center">No results</h3> : movies.map((movie) => {
        return <SingleResult movie={movie} />
    })
    return (
        <div className="movieResult">
            {result}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        movies: state.search.movies
    }
}

export default connect(mapStateToProps)(Results);
