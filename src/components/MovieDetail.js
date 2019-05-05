import React, { Component } from 'react';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                {console.log(this.props.match.params)}
                {this.props.match.params.title}
            </div>
        );
    }
}
 
export default MovieDetail;