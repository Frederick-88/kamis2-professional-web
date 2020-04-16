import React from "react";
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import "./style.css"

const NavbarUtama = () => {
  return (
    <Navbar className="navbar-fx" fixed="top">
        
      {/* <Navbar><img
        src={Logo}
        width="50px"
        height="50px"
        className="d-inline-block align-top"
        alt="logo"
      /></Navbar> */}

      <Nav className="mr-auto">
      <Link className="nav-link-utama" to="/">FD.TECHNOLOGIES</Link>
        <Link className="nav-link-fx" to="/">HOME</Link>
        <Link className="nav-link-fx" to="/works"> WORKS</Link>
        <Link className="nav-link-fx" to="/service">SERVICES</Link>
        <Link className="nav-link-fx" to="/hire">HIRE ME</Link>
      </Nav>

    </Navbar>
  );
};

export default NavbarUtama;