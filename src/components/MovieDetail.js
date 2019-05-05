import React, { Component } from 'react';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="displayMovie">
                {/* {console.log(this.props.match.params)}
                {this.props.match.params.id} */}
                {this.props.movies[this.props.match.params.id].title} - {this.props.movies[this.props.match.params.id].year}
                <br></br>
                <br></br>
                <img className='movieImage' src={this.props.movies[this.props.match.params.id].img} alt=""></img>
                <br></br>
                {this.props.movies[this.props.match.params.id].descrShort}
            </div>
        );
    }
}
 
export default MovieDetail;