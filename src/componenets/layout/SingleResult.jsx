import React from 'react';
import { connect } from 'react-redux';
import { getTitleInfo } from '../../redux/actions/searchActions';

/* In this component  I'm getting data for every single movie to make description more precise*/
class SingleResult extends React.Component {
    state = {
        titleInfo: null
    }

    handleClick = () => {
        this.props.getTitleInfo(this.props.movie.imdbID);
        setInterval(() => this.setState({ titleInfo: this.props.titleInfo[this.props.movie.imdbID] }), 100)
    };

    render() {
        //Here I'm checking if there is titleInfo 
        console.log(this.state.titleInfo);
        const loader = (
            <div className="preloader-wrapper small active center">
                <div className="spinner-layer spinner-green-only ">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        )
        return (
            <div className={"col s12 m4 l3 movie " + this.props.trigger}>
                <div className="card">
                    <div className="card-image">
                        <img className="activator" src={this.props.movie.Poster} onClick={this.handleClick} alt="" />
                        <a className="btn-floating halfway-fab waves-effect waves-light red favorite-btn"><i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content center">
                        <h4 className="card-title activator " onClick={this.handleClick}>{this.props.movie.Title} </h4>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{this.state.titleInfo ? this.state.titleInfo.Title : loader}<i className="material-icons right">close</i></span>
                        {this.state.titleInfo ? this.state.titleInfo.Plot : loader}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        titleInfo: state.search.titleInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTitleInfo: id => dispatch(getTitleInfo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleResult);
