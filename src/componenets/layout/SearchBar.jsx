import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchTitle } from '../../redux/actions/searchActions';

class SearchBar extends Component {
    state = {
        title: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.searchTitle(this.state);
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-field col s10 m10 l8 offset-m1 offset-l2">
                            <label htmlFor="search" >Type the title of movie</label>
                            <input type="text" name="search" id="title" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s1 m1 ">
                            <input className="btn" type="submit" value="Search" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchTitle: title => dispatch(searchTitle(title))
    }
}
export default connect(null, mapDispatchToProps)(SearchBar);

