import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Header from '../Header/Header'
import Landing from '../Landing/LandingPage'
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'

import { HashRouter as Router, Route } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#5ea9be',
      },
      secondary: {
        main: '#9acde0',
      },
      info: {
        main: '#fdf8e2',
      },
    },
  });

  useEffect(() => {
    //getRoute
  }, [])

  // const handleClick = (nextPage, type, payload) => {

  //     if (type) {
  //         dispatch({type: type, payload: payload});
  //         history.push(`/${nextPage}`);
  //     } else {
  //         history.push(`/${nextPage}`);
  //     }

  // }

  return (
    <ThemeProvider theme={theme}>
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

          <Route path='/support'>
            <Support />
          </Route>

          <Route path='/comments'>
            <Comments />
          </Route>

          <Route path='/review'>
            <Review />
          </Route>

        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
