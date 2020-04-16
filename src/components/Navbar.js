import React from "react";
import {Nav, Navbar} from 'react-bootstrap'
import "./style.css"
import Logo from "./assets/logo.png"

const NavbarUtama = () => {
  return (
    <Navbar className="navbar-fx">
      <Navbar><img
        src={Logo}
        width="50px"
        height="50px"
        className="d-inline-block align-top"
        alt="logo"
      /></Navbar>
      <Nav className="mr-auto">
        <Nav.Link className="nav-link-fx" href="#home">HOME</Nav.Link>
        <Nav.Link className="nav-link-fx" href="#features">WORKS</Nav.Link>
        <Nav.Link className="nav-link-fx" href="#pricing">SERVICES</Nav.Link>
        <Nav.Link className="nav-link-fx" href="#pricing">HIRE ME</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarUtama;