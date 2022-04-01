import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header'

function App() {

  return (
    <div className='App'>
      <Header />

      {/* will need minimum 5 Routes: Feeling, Understanding,  (how well are you being) Supported, Comments, Submit */}
      {/* /feeling sends payload to reducer with integer */}
      {/* /understanding sends payload to reducer with integer */}
      {/* /support sends payload to reducer with integer */}
      {/* /comments sends payload of string text */}
      {/* /submit confirms with user, grabs state and sends post to database */}

      {/* /admin gets all reflections from database sorted by date */}
    </div>
  );
}

export default App;
