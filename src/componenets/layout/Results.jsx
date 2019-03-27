import React from 'react';
import { connect } from 'react-redux';
import SingleResult from './SingleResult';
import { getNextPage } from '../../redux/actions/searchActions';
import _ from 'lodash';
let a = 1;

class Results extends React.Component {
    state = {
        flag: true
    }

    componentDidUpdate() {
        const trigger = document.querySelector('.trigger');
        const throt = _.throttle(() => {
            if (trigger.offsetTop < window.scrollY + window.innerHeight) {
                this.getNextPage();
                window.removeEventListener('scroll', throt);
            }
        }, 1000)
        window.addEventListener('scroll', throt);
    }

    getNextPage = () => {
        const pagesNumber = this.props.total ? Math.ceil(this.props.total / 10) : 1;
        a++;
        if (a < pagesNumber && this.state.flag === true) {
            this.props.getNextPage(a);
        }
    }

    render() {
        const result = !this.props.movies ? <div className="container"><h3 className="center">No results</h3></div> : this.props.movies.map((movie, index) => { // I've made '!movies' because I wanted return 'No results' as first, cuz it looks better
            if (index === this.props.movies.length - 1)
                return <SingleResult key={movie.imdbID} movie={movie} trigger={"trigger"} />
            else
                return <SingleResult key={movie.imdbID} movie={movie} />
        })
        const trigger = result.length > 1 ? <div onClick={this.getNextPage} className="btn-floating trigger">\/</div> : null;
        return (
            <div className="movieResult">
                {result}
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12 l12 center">
                            {trigger}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
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
