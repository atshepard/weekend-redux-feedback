import React from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import './App.css';

import Header from '../Header/Header'
import Landing from '../Landing/LandingPage'
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'

import {HashRouter as Router, Route} from 'react-router-dom';

function App() {

  useEffect(() => {
    //getRoute
  },[])

  return (
    <Router>
    <div className='App'>
      <Header />
     
      <Route path='/' exact>
        <Landing />
      </Route>

      <Route path='/feeling'>
        <Feeling />
      </Route>

      <Route path='/understanding'>
        <Understanding />
      </Route>

      <Route path ='/support'>
        <Support />
      </Route>

      <Route path='/comments'>
        <Comments />
      </Route>

      <Route path='/review'>
        <Review />
      </Route>

      {/* /admin gets all reflections from database sorted by date */}
    </div>
    </Router>
  );
}

export default App;
