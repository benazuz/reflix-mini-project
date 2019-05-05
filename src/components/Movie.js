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

            
            this.props.movie.title.toUpperCase().includes(this.props.inputValue.toUpperCase()) ?
            <div>
                <Link to={`/movieDetail/${this.props.movie.id}`}><img className='movieImage' src={this.props.movie.img}></img></Link>
                {this.props.movie.isRented ? <button onClick={this.rentMovie}>-</button> : <button onClick={this.rentMovie}>+</button>}
            </div>
            : null

        )
    }
}

export default Movie;