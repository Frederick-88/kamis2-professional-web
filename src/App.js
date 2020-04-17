import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavbarUtama from "./components/Navbar";
import Contents from "./components/Utama";
import Works from "./components/works";
// SAAT HENDAK MEMBUAT SUB ROUTER, YANG SPERTI http://localhost:3000/service/UiDesign. hendaknya tujuan service dibuat jdi 1 folder.
// KEMUDIAN untuk akses 1 folder itu, dibutuhkan switch dan route, untuk menentukan lokasi mana yng mreka tuju.
import Service from "./components/Service/Index"
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
    <Route exact path="/" component={Contents}></Route>    
      
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
