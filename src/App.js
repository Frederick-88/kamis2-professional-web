import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavbarUtama from "./components/Navbar";
import Contents from "./components/Index";
import Works from "./components/works";
import Service from "./components/Service"
import Hire from "./components/Hire"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      
        <NavbarUtama />
        <Switch>
   
    <Route path="/works" component={Works}></Route>
    <Route path="/service" component={Service}></Route>
    <Route path="/hire" component={Hire}></Route>
    <Route path="/" component={Contents}></Route>    
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
