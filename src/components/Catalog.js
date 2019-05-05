import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Movie from './Movie';
import Rented from './Rented';

class Catalog extends Component {

    render() {
        return (
            <div className='catalogContainer'>
                <input type='text' placeholder='search' value={this.props.inputValue} onChange={this.props.handleSearch}></input>
                <span className='budget'>Budget: 100$</span>
                <br></br>
                <br></br>
                <span>Rented:</span>
                <br></br>
                <div className='rentedMovies'>
                    {this.props.movies.some(m => m.isRented) ?
                        this.props.movies.map(m => m.isRented ?

                            <div className='rented'>
                                <Movie
                                    key={m.title}
                                    movie={m}
                                    rentMovie={this.props.rentMovie}
                                    inputValue={this.props.inputValue}
                                    handleSearch={this.props.handleSearch} />
                            </div> : null) :
                        <span>go ahead and rent some movies!</span>}
                </div>
                <br></br>
                <br></br>
                <span>Catalog:</span>
                <br></br>
                <div className='movies'>
                    {this.props.movies.map(
                        m => <div className='movie'>
                            <Movie
                                key={m.title}
                                movie={m}
                                rentMovie={this.props.rentMovie}
                                inputValue={this.props.inputValue}
                                handleSearch={this.props.handleSearch} />
                        </div>)}
                </div>

            </div>
        );
    }
}

export default Catalog;