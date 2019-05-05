import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {id: 0, name: 'ben', backgroundcolor: 'darkcyan'},
                {id: 1, name: 'adi', backgroundcolor: 'gold'},
                {id: 2, name: 'shay', backgroundcolor: 'darkgreen'}

            ]
        }
    }
    render() { 
        return (
            <div className='users'>
            {this.state.users.map(u=> <Link to='/catalog'><div className="userBox" style={{backgroundColor: u.backgroundcolor}}>{u.name}</div></Link>)}
            </div>
        );
    }
}
 
export default Landing;
