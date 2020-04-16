import React from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavbarUtama from './components/Navbar'
import Contents from './components/Index'

function App() {
  return (
    // <Router>
       <div>
         <NavbarUtama/>

        <Contents />

       </div>
    
    // </Router>
  );
}

export default App;
