import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    rentMovie = () => {
        this.props.rentMovie(this.props.movie.id)
    }

    render() {
        return (
            <Link to={`/movieDetail/${this.props.movie.id}`}>
                <div>
                    <img className='movieImage' src={this.props.movie.img}></img>
                    {this.props.movie.isRented ? <button onClick={this.rentMovie}>-</button> : <button onClick={this.rentMovie}>+</button>}
                </div>
            </Link>
        )
    }
}

export default Movie;