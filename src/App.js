import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import Movie from './components/Movie';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <Router>
      <div className="App">

      <div className='top'>
      <div className='nav'>
      <Link to='/' >Home </Link>
      <Link to='/catalog' >Catalog </Link>
      </div>
      <span className='logo'>Reflix</span>
      </div>
      
      <Route exact path='/' render={() => <Landing/>}></Route>
      <Route exact path='/catalog' render={() => <Catalog/>}></Route>
      <Route exact path='/movieDetail/:id' render={({match}) => <MovieDetail match={match}/>}></Route>
      </div>
    </Router>
  );
}

export default App;
